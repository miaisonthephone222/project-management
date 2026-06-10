---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [engineering, structure]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# Repo Structure — Valtec-PM

```
project-management/
├── index.html                    ← app entry point
├── style.css                     ← all styles
├── script.js                     ← all logic
├── .nojekyll                     ← disables Jekyll on GitHub Pages
├── CLAUDE.md                     ← agent memory
├── AGENTS.md                     ← agent operating protocol
├── CONTEXT.md                    ← entity registry (GraphRAG root)
├── excalibrain.md                ← ExcaliBrain hub
├── Valtec-PM-PM Board.md         ← Kanban board
├── 00_Master_Index.md            ← vault navigator
├── 00_StartHere/
│   ├── File_Registry.md
│   ├── Agent_Operating_Protocol.md
│   └── VBrain_Link.md
├── 01_Specifications/
│   ├── MVP_Spec.md
│   ├── Technical_Design.md
│   └── Flows/
├── 02_Architecture/
│   ├── System_Architecture.md
│   ├── Data_Privacy_and_Security.md
│   └── decisions/
│       └── ADR-001-Static-No-Backend.md
├── 03_Engineering/
│   ├── Build_Test_Runbook.md
│   ├── Repo_Structure.md
│   ├── Coding_Standards.md
│   ├── Design_System.md
│   └── Git_and_PR_Conventions.md
├── 04_Product_Management/
│   ├── Project_State.md
│   ├── Decision_Log.md
│   ├── Risk_Register.md
│   ├── Backlog.md
│   ├── Roadmap.md
│   └── Lessons.md
├── 05_Agent_Workflows/
│   ├── Subagent_Strategy.md
│   ├── Task_Template.md
│   ├── Verification_Checklist.md
│   └── Logs/
├── 06_Reference/
├── Excalidraw/
└── Archive/
```
