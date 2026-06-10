---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [engineering, design]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Design System — Valtec-PM Console

## Fonts

- **UI:** Inter (Google Fonts) — weights 400/500/600/700/800
- **Mono:** system-ui monospace stack (`var(--font-mono)`)
- **Icons:** Tabler Icons webfont v3.19.0 (`ti ti-*`)
- **Base font size:** 14px body; most content ~12-13px

## Color tokens (`:root`)

| Token | Value | Use |
|---|---|---|
| `--bg` | `#eef2ff` | Page background |
| `--surface` | `#ffffff` | Card / panel background |
| `--accent` | `#2563eb` | Primary actions, active states |
| `--text` | `#0f172a` | Primary text |
| `--text-secondary` | `#3b4a6b` | Labels, secondary text |
| `--text-tertiary` | `#64748b` | Placeholders, metadata |
| `--status-planning` | `#f59e0b` | Planning status dot |
| `--status-active` | `#10b981` | Active status dot |
| `--status-done` | `#94a3b8` | Done status dot |

## Component patterns

- **Form fields:** `.f` wrapper → `label` + `input`/`select`/`textarea`; grids via `.fg.fg1/.fg2/.fg3`
- **Inline table inputs:** `.ie` class — borderless, transparent background
- **Buttons:** `.btn` base; `.btn.primary` (blue); `.btn.ai` (gradient); `.btn.slack` (dark)
- **Section headers:** `.sec` — uppercase, letter-spaced, border-bottom
- **Modals:** native `<dialog>` element with `.showModal()` / `.close()`
