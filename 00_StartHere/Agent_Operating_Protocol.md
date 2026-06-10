---
type: reference
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [protocol, agent]
friend: [[CONTEXT]]
---

# Agent Operating Protocol — Valtec-PM

## Before every session

1. Read `CONTEXT.md` — know the entity vocabulary
2. Read `04_Product_Management/Project_State.md` — know current status
3. Check `Valtec-PM-PM Board.md` — know what's in flight

## During session

- Prefer editing existing files over creating new ones
- No comments in code unless the WHY is non-obvious
- No error handling for scenarios that cannot happen
- Local dev: `python3 -m http.server 8080` from workspace root
- Never commit API keys, passwords, or secrets

## After every session

- Update `04_Product_Management/Project_State.md`
- Append to `04_Product_Management/Decision_Log.md` if decisions were made
- Write session log to `05_Agent_Workflows/Logs/YYYY-MM-DD-Session-Summary.md`
- Update Kanban board — move completed tasks to Done with commit hash
- Push to GitHub (`git push origin main`) only when explicitly asked
