---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [security, privacy]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Data Privacy & Security — Valtec-PM Console

## Current state (MVP)

| Concern | Status | Notes |
|---|---|---|
| Password gate | ⚠️ Weak | Hardcoded in `script.js` — visible in public repo source |
| API key | ✅ OK | User-provided; stored in `localStorage`; never committed |
| Deployment data | ⚠️ In-memory only | Lost on page reload; no server-side storage |
| Slack messages | ⚠️ Plaintext | Sent directly to webhook; no encryption beyond HTTPS |
| Auth | ⚠️ None | Single shared password; no user accounts |
| Repo visibility | ⚠️ Public | Password visible in source code |

## Risks

- **R-001** Anyone who views source code can see the password. Mitigation: keep password low-sensitivity; rotate periodically.
- **R-002** Deployment data is lost on refresh. Mitigation: users export CSV for critical data.
- **R-003** API key exposed if device is compromised. Mitigation: localStorage only; key scoped to this tool.

## Post-MVP recommendations

1. Move password to environment variable / server-side auth
2. Add `localStorage` persistence for deployment data
3. Make repo private OR move password gate to server
4. Add user-level API key rotation guidance
