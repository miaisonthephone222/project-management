---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [engineering, standards]
entities: [Valtec-PM Console, T object, deps]
friend: [[CONTEXT]]
---

# Coding Standards — Valtec-PM Console

## General

- No framework, no build step — plain JS only
- No TypeScript, no JSX, no ES modules
- All code in `script.js`; all styles in `style.css`; all HTML in `index.html`
- No comments unless the WHY is non-obvious

## Strings & i18n

- Every user-visible string must be a key in `T.en` and `T.zh`
- Access via `t('key')` — never hardcode English strings in HTML or JS logic
- HTML labels use `data-i18n="key"` attribute; `setLang()` updates them on toggle

## Data model

- All deployment data lives in `deps[id]` — never store state in DOM alone
- Call `saveCurrent()` before reading `deps` in any function that needs fresh data
- New charter fields: add to `charter: {}` in `newDepData()`, and to the `forEach` arrays in both `saveCurrent()` and `loadDep()`

## CSS

- Use CSS custom properties (`var(--token)`) for all colors, never hardcode hex in component rules
- Tokens defined in `:root` in `style.css`
- Class names: lowercase kebab-case

## Security

- Never commit API keys, passwords, or webhook URLs
- `script.js` password is intentionally low-security (see ADR-001); do not escalate its complexity without addressing the underlying architecture
