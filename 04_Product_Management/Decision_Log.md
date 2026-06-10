---
type: pm-note
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [pm, decisions]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Decision Log — Valtec-PM Console

Append-only. Never edit past entries.

---

**D-001** · 2026-06-10 · Static site, no backend
Ship as vanilla HTML/CSS/JS on GitHub Pages. No framework, no build step.
Reason: fastest path to team hands, zero infra cost.
Consequence: no persistence, weak auth. Tracked in BL-001, BL-004.
→ [[02_Architecture/decisions/ADR-001-Static-No-Backend]]

**D-002** · 2026-06-10 · Claude API called directly from browser
Use `anthropic-dangerous-direct-browser-access: true` header to call API from browser without a proxy.
Reason: no backend to proxy through.
Consequence: API key stored in localStorage; visible to anyone with browser devtools on user's machine.

**D-003** · 2026-06-10 · Detailed Information and Client Contact Window excluded from Slack kickoff
Charter has two internal fields (Detailed Information, Client Contact Window) that should not appear in the public-facing kickoff Slack message.
Reason: user request — sensitive internal notes.

**D-004** · 2026-06-10 · Rename Start/End Date to Estimated Deployment Start Date / Estimated Acceptance Date
More precise language for UAV maritime deployment lifecycle.
Reason: user request.
