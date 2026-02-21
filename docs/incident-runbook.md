# Frontend Incident Runbook

## Scope
This runbook covers production incidents for the Rise frontend deployment and checkout experience.

## Detection and Triage

### Automated signals
- **Availability:** CDN synthetic check (GET `/`) every 1 minute; page load non-200 for 3 consecutive checks creates `SEV-2`.
- **Frontend errors:** `frontend.exception.uncaught` and `frontend.exception.unhandled_rejection` events from telemetry.
- **Checkout health:** Alert when `checkout.session.failure.threshold_breached` is emitted (>= 5 failures and >= 20% failure rate across 5 minutes).
- **Degraded UX:** Sustained high `frontend.ux.degraded.longtask` events (> 250ms tasks) should be treated as performance incident candidate.

### Severity guide
- **SEV-1:** Checkout completely unavailable or major outage affecting >50% of users.
- **SEV-2:** Significant degradation (high checkout failures, broad JS crashes, or severe latency).
- **SEV-3:** Isolated failures with workaround available.

## Immediate Response Workflow
1. **Acknowledge** alert in on-call channel and assign incident commander.
2. **Freeze active deploys** until incident scope is understood.
3. **Validate blast radius**:
   - Check CDN/hosting status page.
   - Confirm telemetry volume and failure-rate trend.
   - Reproduce critical path (landing -> product -> checkout session create).
4. **Mitigate quickly**:
   - Roll back to last known-good frontend deploy if incident correlates to release.
   - Disable risky feature flags (if available).
   - If backend checkout dependency is down, show fallback support/contact CTA.

## Rollback Procedure
1. In hosting provider dashboard, select the previous successful production deploy.
2. Promote the deploy to production.
3. Purge CDN cache for `/` and `/assets/*` if stale artifacts are suspected.
4. Re-run smoke checks and verify checkout telemetry recovers.
5. Post rollback confirmation in incident channel with timestamp.

## Communication Workflow

### Internal
- Open incident room: `#inc-rise-frontend`.
- Update every 15 minutes for SEV-1/SEV-2 incidents.
- Record: start time, impact summary, mitigations, owner, ETA.

### External
- If customer-facing impact > 15 minutes, publish status page notice.
- Support team gets a prepared response with:
  - Incident summary
  - Impacted capabilities
  - Current workaround (if any)
  - Next update ETA

## Recovery and Closure
1. Confirm key metrics have stabilized for at least 30 minutes:
   - Successful page checks
   - Checkout failure rate below threshold
   - Error rate returned to baseline
2. Declare incident resolved in all channels.
3. Schedule postmortem within 2 business days.

## Postmortem Checklist
- Timeline with detection, decision points, and recovery.
- Root cause and contributing factors.
- What worked / what did not.
- Action items with owners and due dates:
  - Hardening gaps
  - Monitoring/alert tuning
  - Test coverage and release guardrails
