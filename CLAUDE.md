# CLAUDE.md — Valtec-PM

## Lookup order

1. `CONTEXT.md` — entity definitions. Read before designing or building anything.
2. `00_StartHere/File_Registry.md` — canonical doc map
3. `01_Specifications/` — what it should do
4. `02_Architecture/` — how it's wired; ADRs in `decisions/`
5. `03_Engineering/` — how to build/run it
6. `04_Product_Management/` — current state, decisions, risks
7. `05_Agent_Workflows/Logs/` — prior session context
8. Code (`index.html`, `script.js`, `style.css`) — wins over spec on any conflict. Log drift in File_Registry.

## Vault paths

| Role | Path |
|---|---|
| Entity registry + GraphRAG root | `CONTEXT.md` |
| ExcaliBrain hub | `excalibrain.md` |
| Active work pipeline | `Valtec-PM-PM Board.md` |
| Start here / registry | `00_StartHere/` |
| Specs | `01_Specifications/` |
| Architecture + ADRs | `02_Architecture/` `02_Architecture/decisions/` |
| Engineering | `03_Engineering/` |
| PM state | `04_Product_Management/` |
| Agent logs | `05_Agent_Workflows/Logs/` |
| Diagrams | `Excalidraw/` |
| Archive | `Archive/` |

## Tech stack

- Vanilla HTML / CSS / JS — no build step, no framework
- Single-page app: `index.html` + `style.css` + `script.js`
- Anthropic Claude API (`claude-sonnet-4-6`) called directly from browser via `fetch()`
- Required headers: `x-api-key`, `anthropic-version: 2023-06-01`, `anthropic-dangerous-direct-browser-access: true`
- API key stored in `localStorage` key `valtec_api_key`
- Password gate via `sessionStorage` — password in `script.js` IIFE
- Deployed on GitHub Pages: `https://miaisonthephone222.github.io/project-management/`
- Local dev: `python3 -m http.server 8080` → `http://localhost:8080`

## V-Brain connection

This project connects to V-Brain (valtec-brain) via:
- Stream: `cross`
- Source map: see `valtec-brain/00_StartHere/Source_Stream_Map.md`
- Domain vocabulary: `valtec-brain/CONTEXT.md` (READ ONLY)

Never surface `visibility: restricted` or `Personal/` content from V-Brain.

## Frontmatter standard

Every new note: `type`, `project`, `visibility`, `status`, `date`, `owner`. Add `entities:`, `parent:`, `child:`, `friend:` when the note connects to the knowledge graph.

## Agent log protocol

`05_Agent_Workflows/Logs/YYYY-MM-DD-Session-Summary[-slug].md`

Required sections: **Progress** · **Decisions Made** · **Next Steps**

Write a log when: code was touched AND a non-obvious decision was made, OR investigation >30 min, OR user asked.

## Kanban protocol

Priority: `⏫` pull first · default medium · `⏬` pull last.
- Pull task → move block from **To Do** → **Doing**
- Complete → move to **Done**, flip `- [ ]` → `- [x]`, append `(fix: <hash>)`
- Durable decision → append to `Decision_Log.md`, mirror one-liner to board

## Obsidian Git

Auto-commits every 10 minutes. Pull on startup. Commit message: `vault: auto-backup {{date}}`.
