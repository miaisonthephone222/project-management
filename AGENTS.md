# Valtec-PM — Agent Map

**Never commit secrets.** API keys, passwords, credentials never go in code or markdown.

## Workflow

1. Read `CONTEXT.md` and linked specs before any implementation.
2. Enter plan mode for non-trivial tasks (3+ steps or architectural decisions).
3. Make minimal, low-risk changes. Stop and re-plan if something goes sideways.
4. Run verification before marking complete.
5. Update `Project_State.md`, `Decision_Log.md`, and the Kanban board at end of session.

## Agent rules

- **CONTEXT.md first** — every entity used in code must have a CONTEXT.md entry. If it doesn't, add it.
- **Code beats spec** — when they disagree, code is authoritative. Log drift in `File_Registry.md`.
- **Stable IDs** — BL-###, D-###, R-###, L-### across all PM artifacts.
- **Append-only decision log** — never edit past entries; append only.
- **ExcaliBrain links** — use `entities:`, `parent:`, `child:`, `friend:` frontmatter to keep the graph connected.
- **Dataview awareness** — `04_Product_Management/` index files use Dataview queries. Keep frontmatter accurate so queries stay valid.

## File registry (routing)

### 00_StartHere
- [[00_StartHere/Agent_Operating_Protocol]]
- [[00_StartHere/File_Registry]]
- [[00_StartHere/VBrain_Link]]

### 01_Specifications
- [[01_Specifications/MVP_Spec]]
- [[01_Specifications/Technical_Design]]

### 02_Architecture
- [[02_Architecture/System_Architecture]]
- [[02_Architecture/Data_Privacy_and_Security]]
- `02_Architecture/decisions/` — ADRs

### 03_Engineering
- [[03_Engineering/Repo_Structure]]
- [[03_Engineering/Build_Test_Runbook]]
- [[03_Engineering/Coding_Standards]]
- [[03_Engineering/Design_System]]
- [[03_Engineering/Git_and_PR_Conventions]]

### 04_Product_Management
- [[04_Product_Management/Project_State]]
- [[04_Product_Management/Decision_Log]]
- [[04_Product_Management/Risk_Register]]
- [[04_Product_Management/Backlog]]
- [[04_Product_Management/Roadmap]]
- [[04_Product_Management/Lessons]]

### 05_Agent_Workflows
- [[05_Agent_Workflows/Subagent_Strategy]]
- [[05_Agent_Workflows/Task_Template]]
- [[05_Agent_Workflows/Verification_Checklist]]
