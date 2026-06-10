---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [engineering, git]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Git & PR Conventions — Valtec-PM

## Branches

- `main` — production branch; GitHub Pages deploys from here
- Feature branches: `feature/short-slug`
- Fixes: `fix/short-slug`

## Commit messages

```
<type>: <short description>

<body if needed>

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

Types: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`

## Vault commits (Obsidian Git)

```
vault: auto-backup 2026-06-10
```

Keep vault commits separate from code commits where possible.

## Deploy

Push to `main` → GitHub Actions → GitHub Pages (~2 min).
Always hard-refresh (`Cmd+Shift+R`) after deploy to clear browser cache.
