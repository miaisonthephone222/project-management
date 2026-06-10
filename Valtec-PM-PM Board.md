---

kanban-plugin: board
tags:
  - agent-logs
  - project-management

---

## Epics

- [ ] GitHub Pages production deployment
- [ ] Claude API AI panel integration


## Decision Log

- [ ] 2026-06-10 — Deployed as static site on GitHub Pages (no backend, no build step)
- [ ] 2026-06-10 — Claude API called directly from browser using anthropic-dangerous-direct-browser-access header
- [ ] 2026-06-10 — API key stored in localStorage; not committed to repo


## ⏫ To Do

- [ ] ⏫ Validate GitHub Pages deployment renders new style correctly
- [ ] Test AI panel with live API key end-to-end
- [ ] Add more charter field validations
- [ ] ⏬ Offline / localStorage persistence across sessions


## Doing




## Testing




## Done

- [x] Full UI redesign — bright theme, navigation zones (fix: 5d8bcc7)
- [x] Claude API integration with browser-safe headers (fix: b601f0b)
- [x] Font size bump to ~12-14px (fix: b601f0b)
- [x] Renamed Start/End Date fields to Estimated Deployment/Acceptance dates (fix: b601f0b)
- [x] Added Detailed Information field (excluded from Slack kickoff) (fix: b601f0b)
- [x] Added Client Contact Window field (fix: 1ca96b0)
- [x] .nojekyll added for GitHub Pages (fix: 9f0621d)


## Backlog

- [ ] BL-001 — Persist deps data to localStorage between page reloads
- [ ] BL-002 — Export full deployment report as PDF
- [ ] BL-003 — Multi-user / shared state via backend
- [ ] BL-004 — Password management (replace hardcoded gate)
- [ ] BL-005 — Conversation history in AI panel (multi-turn)


%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false,false,false,false]}
```
%%
