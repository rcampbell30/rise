(function () {
  const cfg = {
    app: 'rise-frontend',
    env: window.RISE_ENV || 'production',
    telemetryEndpoint: window.RISE_TELEMETRY_ENDPOINT || '/api/telemetry',
    alertEndpoint: window.RISE_ALERT_ENDPOINT || '/api/alerts',
    checkoutPattern: /checkout-session|create-checkout-session|checkout/i,
    checkoutWindowMs: 5 * 60 * 1000,
    checkoutFailureThreshold: 5,
    checkoutFailureRateThreshold: 0.2,
  };

  const state = {
    checkoutEvents: [],
    alertCooldownUntil: 0,
  };

  function nowIso() {
    return new Date().toISOString();
  }

  function postJson(endpoint, payload) {
    if (!window.isSecureContext) {
      console.warn('Telemetry skipped: insecure context', payload);
      return Promise.resolve();
    }

    return fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify(payload),
      credentials: 'omit',
      mode: 'cors',
    }).catch((error) => {
      console.warn('Telemetry transport failed', error);
    });
  }

  function emit(eventType, detail, severity) {
    const payload = {
      app: cfg.app,
      env: cfg.env,
      eventType,
      severity: severity || 'info',
      detail,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: nowIso(),
    };

    return postJson(cfg.telemetryEndpoint, payload);
  }

  function emitAlert(alertType, detail) {
    const now = Date.now();
    if (now < state.alertCooldownUntil) return;
    state.alertCooldownUntil = now + 10 * 60 * 1000;

    postJson(cfg.alertEndpoint, {
      app: cfg.app,
      env: cfg.env,
      alertType,
      severity: 'high',
      detail,
      timestamp: nowIso(),
    });
  }

  function normalizeError(errorLike) {
    if (!errorLike) return { message: 'Unknown error' };
    return {
      name: errorLike.name || 'Error',
      message: errorLike.message || String(errorLike),
      stack: errorLike.stack,
    };
  }

  function trackCheckout(success, detail) {
    const t = Date.now();
    state.checkoutEvents.push({ success, t });
    state.checkoutEvents = state.checkoutEvents.filter((e) => t - e.t <= cfg.checkoutWindowMs);

    const total = state.checkoutEvents.length;
    const failures = state.checkoutEvents.filter((e) => !e.success).length;
    const rate = total === 0 ? 0 : failures / total;

    emit(success ? 'checkout.session.success' : 'checkout.session.failure', {
      total,
      failures,
      failureRate: Number(rate.toFixed(3)),
      ...detail,
    }, success ? 'info' : 'error');

    if (
      !success &&
      failures >= cfg.checkoutFailureThreshold &&
      rate >= cfg.checkoutFailureRateThreshold
    ) {
      emitAlert('checkout.session.failure.threshold_breached', {
        total,
        failures,
        failureRate: Number(rate.toFixed(3)),
        threshold: {
          minFailures: cfg.checkoutFailureThreshold,
          minFailureRate: cfg.checkoutFailureRateThreshold,
          windowMs: cfg.checkoutWindowMs,
        },
      });
    }
  }

  function isCheckoutUrl(url) {
    return cfg.checkoutPattern.test(String(url || ''));
  }

  const nativeFetch = window.fetch;
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : input && input.url;
    const method = (init && init.method) || 'GET';
    const isCheckout = isCheckoutUrl(url) && method.toUpperCase() === 'POST';

    return nativeFetch.call(this, input, init).then(
      (res) => {
        if (isCheckout) {
          trackCheckout(res.ok, {
            status: res.status,
            method,
            endpoint: url,
          });
        }
        return res;
      },
      (error) => {
        if (isCheckout) {
          trackCheckout(false, {
            method,
            endpoint: url,
            transportError: normalizeError(error),
          });
        }
        throw error;
      }
    );
  };

  window.addEventListener('error', function (event) {
    emit('frontend.exception.uncaught', {
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno,
      error: normalizeError(event.error),
    }, 'error');
  });

  window.addEventListener('unhandledrejection', function (event) {
    emit('frontend.exception.unhandled_rejection', {
      reason: normalizeError(event.reason),
    }, 'error');
  });

  if ('PerformanceObserver' in window) {
    try {
      const po = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (entry.entryType === 'longtask' && entry.duration > 250) {
            emit('frontend.ux.degraded.longtask', {
              duration: entry.duration,
              startTime: entry.startTime,
            }, 'warning');
          }
        });
      });
      po.observe({ type: 'longtask', buffered: true });
    } catch (_err) {
      // noop
    }
  }

  emit('frontend.monitoring.initialized', {
    secureContext: window.isSecureContext,
  });
})();
