---
type: spec
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [spec, technical]
entities: [Valtec-PM Console, deps, T object, AI Agent panel, Slack integration]
parent: [[01_Specifications/MVP_Spec]]
friend: [[CONTEXT]]
---

# Technical Design — Valtec-PM Console

## Stack

- Vanilla HTML / CSS / JS — zero dependencies, no build step
- Single file entry: `index.html` loads `style.css` and `script.js`
- Anthropic Claude API via `fetch()` (browser-direct)
- Deployed: GitHub Pages (static)

## Data model

All state lives in the `deps` object (keyed by deployment ID):

```js
deps[id] = {
  id, client, vessel, location, status,
  charter: { name, id, client, vessel, location, pm, contact, start, end, goal, success, detail },
  milestones: [{ name, date, sIdx, done }],
  tracker: [{ item, owner, due, sIdx, note }],
  eod: { date, reporter, weather, done[], plan[], issues[] },
  risks: [{ desc, cat, prob, impact, score, mit, owner, sIdx }],
  issues: [{ desc, date, sevIdx, impact, action, owner, statusIdx }],
  retro: { proj, date, rIdx, good[], bad[], actions[] },
}
```

## Key functions

| Function | Role |
|---|---|
| `saveCurrent()` | Reads DOM → writes to `deps[currentDep]` |
| `loadDep(id)` | Writes `deps[id]` → DOM |
| `syncField(el)` | Live-sync single charter field on input |
| `buildSlackMsg(tool)` | Generates Slack-formatted string for tool |
| `sendAI(msg)` | Calls Anthropic API; reads currentDep context |
| `t('key')` | Returns translated string for current lang |

## AI panel

- Model: `claude-sonnet-4-6`
- Context sent: `{ dep, tool, lang, data: deps[currentDep] }`
- System prompt: PM Agent for Valtec UAV maritime deployments
- API key: user-provided, stored in `localStorage` as `valtec_api_key`

## Slack fields per tool

| Tool | Included | Excluded |
|---|---|---|
| Charter | name, client, vessel, PM, objective, milestones | contact, detail |
| Tracker | stats, delayed items | — |
| EOD | done, plan, issues | — |
| Risk | risk list with scores | — |
| Retro | outcome, good, bad, actions | — |
