---
type: moc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [index, navigation]
entities: []
friend: [[CONTEXT]]
---

# 00 — Master Index

## Quick links

- [[Valtec-PM-PM Board]] — active work pipeline
- [[CONTEXT]] — entity registry
- [[excalibrain]] — knowledge graph
- [[00_StartHere/File_Registry]]
- [[04_Product_Management/Project_State]]
- [[04_Product_Management/Decision_Log]]
- [[01_Specifications/MVP_Spec]]
- [[02_Architecture/System_Architecture]]
- [[03_Engineering/Build_Test_Runbook]]

## Open blockers

```dataview
TABLE status, owner, date
FROM "04_Product_Management"
WHERE type = "pm-note" AND status = "blocked"
SORT date DESC
```

## Active risks

```dataview
TABLE severity, status, owner
FROM "04_Product_Management/Risk_Register.md"
WHERE status = "open" OR status = "monitoring"
SORT severity ASC
```

## Recent agent logs

```dataview
TABLE date, file.name
FROM "05_Agent_Workflows/Logs"
WHERE type = "agent-log"
SORT date DESC
LIMIT 10
```
