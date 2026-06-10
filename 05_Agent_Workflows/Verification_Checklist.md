---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [agent, verification]
friend: [[CONTEXT]]
---

# Verification Checklist — Valtec-PM Console

Run before marking any code task complete.

## Functionality

- [ ] Feature works on `http://localhost:8080` (not `file://`)
- [ ] Password gate still works
- [ ] No console errors on load
- [ ] Language toggle still works (EN ↔ 中文)
- [ ] New fields save via `saveCurrent()` and reload via `loadDep()`
- [ ] Slack message content is correct for affected tool

## Code quality

- [ ] New user-visible strings added to both `T.en` and `T.zh`
- [ ] New charter fields added to `newDepData()`, `saveCurrent()`, `loadDep()`
- [ ] No hardcoded colors — using CSS tokens
- [ ] No secrets committed

## Deploy

- [ ] Committed with descriptive message
- [ ] Pushed to `main`
- [ ] GitHub Pages updated (check Actions tab)
- [ ] Hard-refreshed and verified on live URL
