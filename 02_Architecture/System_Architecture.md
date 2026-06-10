---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [architecture, system]
entities: [Valtec-PM Console, deps, AI Agent panel, Slack integration]
friend: [[CONTEXT]]
---

# System Architecture — Valtec-PM Console

## Overview

```
Browser
├── index.html        ← app shell, all HTML
├── style.css         ← CSS custom properties + component styles
└── script.js         ← state, logic, API calls
      ├── Password gate (IIFE, sessionStorage)
      ├── T{} translation dictionary (EN / ZH)
      ├── deps{} in-memory data model
      ├── DOM ↔ deps sync (saveCurrent / loadDep)
      ├── Anthropic API (fetch → claude-sonnet-4-6)
      └── Slack message builder (buildSlackMsg)

External services
├── api.anthropic.com/v1/messages   ← AI panel
├── hooks.slack.com (webhook)        ← Slack send
├── fonts.googleapis.com             ← Inter font
└── cdn.jsdelivr.net                 ← Tabler Icons
```

## Request flow — AI panel

```
User types message
  → sendAI()
  → reads localStorage valtec_api_key
  → saveCurrent() snapshots deps
  → POST api.anthropic.com/v1/messages
      headers: x-api-key, anthropic-version, anthropic-dangerous-direct-browser-access
      body: { model, system, messages: [{ role: user, content: tool+data+request }] }
  → response.content[0].text → rendered in AI panel
```

## Deployment

- GitHub repo: `miaisonthephone222/project-management`
- Branch: `main`
- Pages URL: `https://miaisonthephone222.github.io/project-management/`
- No build step — GitHub Pages serves files directly
- `.nojekyll` prevents Jekyll processing
