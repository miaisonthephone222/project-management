---
type: pm-note
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [pm, lessons]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Lessons Learned — Valtec-PM Console

Append as they are discovered.

---

**L-001** · 2026-06-10
Opening `index.html` directly as a `file://` URL blocks the Anthropic API call (browser CORS policy treats file:// as unique origin). Must serve via `python3 -m http.server` or a real URL.

**L-002** · 2026-06-10
GitHub Pages takes 1-3 minutes to redeploy after a push. Browser cache can show stale version. Always `Cmd+Shift+R` after deploy.

**L-003** · 2026-06-10
`oninput` may not fire reliably on paste into `type="password"` inputs in all browsers. Add `onpaste="setTimeout(()=>fn(this.value),0)"` and `onchange` as fallbacks.
