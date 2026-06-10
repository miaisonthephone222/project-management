---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [engineering, runbook]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Build & Test Runbook — Valtec-PM Console

## Local dev

```bash
cd /Users/mia.lin/project-management-workspace
python3 -m http.server 8080
# open http://localhost:8080
```

No build step. No npm. No node_modules.

## Deploy to production

```bash
git add <files>
git commit -m "description"
git push origin main
# GitHub Pages auto-deploys in ~2 min
# URL: https://miaisonthephone222.github.io/project-management/
```

After pushing: wait 2 minutes, then **Cmd+Shift+R** (hard refresh) to bypass browser cache.

Check deployment status: `github.com/miaisonthephone222/project-management/actions`

## Manual testing checklist

- [ ] Password gate appears on first load; denies wrong password
- [ ] Create new deployment → tab appears; fields save on input
- [ ] Switch between tools (Charter / Tracker / EOD / Risk / Retro)
- [ ] Slack "Review & Send" opens preview modal with correct content
- [ ] Charter kickoff Slack message excludes Detailed Information and Client Contact Window
- [ ] AI panel opens; key input bar shows; key saves (bar turns green)
- [ ] AI panel sends message and returns response
- [ ] Language toggle (EN ↔ 中文) updates all labels
- [ ] Export CSV works for Tracker and Risk Log
- [ ] Delete deployment; last deployment cannot be deleted

## Known issues

- Data is lost on page reload (in-memory only — BL-001)
- Password visible in source code (ADR-001)
