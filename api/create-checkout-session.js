const { CURRENCY, PRODUCTS } = require('./catalog');

const MAX_LINE_ITEMS = 20;
const MAX_QUANTITY_PER_ITEM = 10;

class ApiError extends Error {
  constructor(status, code, message, type = 'user_error') {
    super(message);
    this.status = status;
    this.code = code;
    this.type = type;
  }
}

function json(res, status, payload, origin) {
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');
  res.status(status).send(JSON.stringify(payload));
}

function getAllowedOrigins() {
  return [process.env.FRONTEND_ORIGIN, process.env.FRONTEND_ORIGINS]
    .filter(Boolean)
    .flatMap((value) => value.split(','))
    .map((origin) => origin.trim())
    .filter(Boolean);
}

function assertOriginAllowed(origin) {
  if (!origin) return null;

  const allowedOrigins = getAllowedOrigins();
  if (!allowedOrigins.length) {
    throw new ApiError(
      500,
      'server_origin_misconfigured',
      'Checkout origin policy is not configured.',
      'system_error',
    );
  }

  if (!allowedOrigins.includes(origin)) {
    throw new ApiError(403, 'origin_not_allowed', 'This origin is not allowed for checkout.');
  }

  return origin;
}

function assertHttps(req) {
  if (process.env.NODE_ENV !== 'production') return;

  const forwardedProto = req.headers['x-forwarded-proto'];
  if (forwardedProto && forwardedProto !== 'https') {
    throw new ApiError(400, 'https_required', 'Checkout requires HTTPS.');
  }
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function assertAllowedKeys(obj, allowedKeys, fieldName) {
  const providedKeys = Object.keys(obj);
  const unexpected = providedKeys.filter((key) => !allowedKeys.includes(key));
  if (unexpected.length) {
    throw new ApiError(400, 'invalid_payload', `${fieldName} contains unsupported fields: ${unexpected.join(', ')}`);
  }
}

function parseCart(body) {
  if (!isPlainObject(body)) {
    throw new ApiError(400, 'invalid_payload', 'Request body must be a JSON object.');
  }

  assertAllowedKeys(body, ['items'], 'Body');

  if (!Array.isArray(body.items) || body.items.length < 1 || body.items.length > MAX_LINE_ITEMS) {
    throw new ApiError(
      400,
      'invalid_items',
      `items must be an array with 1 to ${MAX_LINE_ITEMS} entries.`,
    );
  }

  return body.items.map((item, index) => validateCartItem(item, index));
}

function validateCartItem(item, index) {
  if (!isPlainObject(item)) {
    throw new ApiError(400, 'invalid_item', `items[${index}] must be an object.`);
  }

  assertAllowedKeys(item, ['id', 'quantity', 'selectedColor', 'name', 'price', 'image'], `items[${index}]`);

  const { id, quantity, selectedColor, name, price } = item;

  if (typeof id !== 'string' || !PRODUCTS[id]) {
    throw new ApiError(400, 'invalid_product', `items[${index}].id is not a recognized product.`);
  }

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY_PER_ITEM) {
    throw new ApiError(
      400,
      'invalid_quantity',
      `items[${index}].quantity must be an integer between 1 and ${MAX_QUANTITY_PER_ITEM}.`,
    );
  }

  const product = PRODUCTS[id];
  if (selectedColor !== undefined) {
    if (typeof selectedColor !== 'string' || !product.colors.includes(selectedColor)) {
      throw new ApiError(400, 'invalid_option', `items[${index}].selectedColor is not allowed for this product.`);
    }
  }

  if (name !== undefined && name !== product.name) {
    throw new ApiError(400, 'tampered_payload', `items[${index}].name does not match the product catalog.`);
  }

  if (price !== undefined) {
    const normalizedClientPrice = Math.round(Number(price) * 100);
    if (!Number.isFinite(normalizedClientPrice) || normalizedClientPrice !== product.unitAmount) {
      throw new ApiError(400, 'tampered_payload', `items[${index}].price does not match the product catalog.`);
    }
  }

  return {
    product,
    quantity,
    selectedColor: selectedColor || null,
  };
}

function toCheckoutFormBody(validatedItems) {
  const params = new URLSearchParams({
    mode: 'payment',
    success_url: process.env.CHECKOUT_SUCCESS_URL,
    cancel_url: process.env.CHECKOUT_CANCEL_URL,
    'automatic_tax[enabled]': 'true',
    allow_promotion_codes: 'true',
  });

  validatedItems.forEach((entry, i) => {
    params.append(`line_items[${i}][quantity]`, String(entry.quantity));
    params.append(`line_items[${i}][price_data][currency]`, CURRENCY);
    params.append(`line_items[${i}][price_data][unit_amount]`, String(entry.product.unitAmount));
    params.append(`line_items[${i}][price_data][product_data][name]`, entry.product.name);

    if (entry.product.image && process.env.FRONTEND_ORIGIN) {
      const imageUrl = new URL(entry.product.image, process.env.FRONTEND_ORIGIN).toString();
      params.append(`line_items[${i}][price_data][product_data][images][0]`, imageUrl);
    }

    if (entry.selectedColor) {
      params.append(
        `line_items[${i}][price_data][product_data][metadata][selectedColor]`,
        entry.selectedColor,
      );
    }

    params.append(`line_items[${i}][price_data][product_data][metadata][productId]`, entry.product.id);
  });

  return params;
}

function assertRuntimeConfiguration() {
  const required = ['STRIPE_SECRET_KEY', 'CHECKOUT_SUCCESS_URL', 'CHECKOUT_CANCEL_URL'];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new ApiError(
      500,
      'server_misconfigured',
      `Missing required environment variables: ${missing.join(', ')}`,
      'system_error',
    );
  }
}

async function createStripeCheckoutSession(validatedItems) {
  const formBody = toCheckoutFormBody(validatedItems);
  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  });

  const responseJson = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(
      502,
      'provider_checkout_failed',
      responseJson?.error?.message || 'Unable to create payment session.',
      'system_error',
    );
  }

  if (!responseJson?.url) {
    throw new ApiError(
      502,
      'provider_invalid_response',
      'Payment provider returned an invalid checkout response.',
      'system_error',
    );
  }

  return responseJson.url;
}

module.exports = async function createCheckoutSessionHandler(req, res) {
  const requestOrigin = req.headers.origin;

  try {
    const allowedOrigin = assertOriginAllowed(requestOrigin);

    if (req.method === 'OPTIONS') {
      return json(res, 204, {}, allowedOrigin);
    }

    if (req.method !== 'POST') {
      throw new ApiError(405, 'method_not_allowed', 'Only POST is supported for this route.');
    }

    assertHttps(req);
    assertRuntimeConfiguration();

    const validatedItems = parseCart(req.body);
    const checkoutUrl = await createStripeCheckoutSession(validatedItems);

    return json(res, 200, { url: checkoutUrl }, allowedOrigin);
  } catch (error) {
    const allowedOrigin = requestOrigin && getAllowedOrigins().includes(requestOrigin) ? requestOrigin : null;

    if (error instanceof ApiError) {
      return json(
        res,
        error.status,
        {
          error: {
            code: error.code,
            message: error.message,
            type: error.type,
          },
        },
        allowedOrigin,
      );
    }

    return json(
      res,
      500,
      {
        error: {
          code: 'internal_error',
          message: 'An unexpected server error occurred.',
          type: 'system_error',
        },
      },
      allowedOrigin,
    );
  }
};
