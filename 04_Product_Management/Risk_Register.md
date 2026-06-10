---
type: pm-note
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [pm, risk]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Risk Register — Valtec-PM Console

| ID | Risk | Prob | Impact | Score | Mitigation | Owner | Status |
|---|---|---|---|---|---|---|---|
| R-001 | Password visible in public GitHub repo source | H | M | 6 | Keep password low-sensitivity; rotate periodically; move to private repo post-MVP | mia.lin | monitoring |
| R-002 | Deployment data lost on page reload | H | H | 9 | Users export CSV for critical data; BL-001 tracks localStorage persistence | mia.lin | open |
| R-003 | Anthropic API key exposed if device compromised | L | H | 3 | localStorage only; key scoped to tool; user rotates if needed | mia.lin | monitoring |
| R-004 | GitHub Pages style cache prevents users seeing updates | M | M | 4 | Document hard-refresh (Cmd+Shift+R) in onboarding | mia.lin | open |
