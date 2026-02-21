# Frontend Hardening and Monitoring Baseline

## Platform hardening controls
The deployment enforces baseline HTTP response headers in `netlify.toml`:
- `Content-Security-Policy` with `default-src 'self'`, `frame-ancestors 'none'`, mixed-content blocking, and `connect-src 'self' https:` to support secure external telemetry backends.
- `Strict-Transport-Security` (2 years + preload).
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- Clickjacking protection via `X-Frame-Options: DENY` and CSP frame restrictions.

## HTTPS and caching policy
- Requests to `http://:host/*` are redirected to HTTPS for any host fronted by this deployment.
- `assets/*` plus image files (`*.png`, `*.jpg`) are cached for one year with `immutable`.
- `security-monitoring.js` uses a short cache (`max-age=300`) with `must-revalidate` so monitoring updates propagate quickly.
- HTML root document is marked `must-revalidate` to avoid serving stale shell content.

## Frontend monitoring coverage
`security-monitoring.js` provides client-side telemetry for:
- Uncaught exceptions (`window.error`).
- Unhandled promise rejections.
- Checkout session request success/failure tracking (fetch wrapper on checkout endpoints).
- Degraded UX via long-task detection (`PerformanceObserver`).

## Checkout alert thresholds
- Sliding window: 5 minutes.
- Alert condition: at least 5 checkout session failures **and** failure rate >= 20%.
- Cooldown: one alert every 10 minutes to reduce noise.

## Required deployment configuration
Set endpoints in runtime config if different from defaults:
- `window.RISE_TELEMETRY_ENDPOINT` (default `/api/telemetry`)
- `window.RISE_ALERT_ENDPOINT` (default `/api/alerts`)
- `window.RISE_ENV` (default `production`)
