# Checkout API

This repository now includes a server-side endpoint at:

- `POST /api/create-checkout-session`

## Behavior

- Strictly validates incoming cart payload (`items`) against the server-side product catalog.
- Enforces quantity bounds (`1..10`) and max line items (`20`).
- Rejects unknown fields, unknown products, and invalid options/colors.
- Detects client-side tampering for optional `name`/`price` values.
- Creates a Stripe Checkout Session using server-side secrets.
- Returns `{ "url": "..." }` on success.
- Returns structured errors in the form:

```json
{
  "error": {
    "code": "invalid_product",
    "message": "items[0].id is not a recognized product.",
    "type": "user_error"
  }
}
```

## Environment variables

See `.env.example` for required values:

- `FRONTEND_ORIGIN` (and optional `FRONTEND_ORIGINS`)
- `STRIPE_SECRET_KEY`
- `CHECKOUT_SUCCESS_URL`
- `CHECKOUT_CANCEL_URL`

## CORS + HTTPS

- Requests with an `Origin` header must match configured allowed origins.
- `OPTIONS` preflight is supported.
- In `NODE_ENV=production`, non-HTTPS requests (`x-forwarded-proto != https`) are rejected.

## Deployment notes

- Deploy behind HTTPS (for example: Vercel/Netlify/custom reverse proxy with TLS).
- Configure `FRONTEND_ORIGIN` to the production frontend domain to enforce strict origin policy.
- Keep `STRIPE_SECRET_KEY` in server-only environment settings; never include it in frontend bundles.
