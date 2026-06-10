---
type: spec
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [spec, mvp]
entities: [Valtec-PM Console, Deployment, Charter, Tracker, EOD Report, Risk Log, Retrospective]
friend: [[CONTEXT]]
---

# MVP Spec — Valtec-PM Console

## Purpose

Internal tool for Valtec UAV maritime deployment teams to manage the full project lifecycle: from kick-off charter through daily EOD reports, risk tracking, and retrospective.

## Users

- Project Managers (primary)
- Deployment team leads
- Client-facing coordinators

## Core user stories

1. **Create a deployment** — PM enters Project ID, client, vessel, location, status → deployment tab appears
2. **Fill charter** — PM fills project info, estimated dates, objective, milestones, contact window, detailed info
3. **Send kick-off notice** — Charter tab generates Slack message (excludes Detailed Information and Contact Window)
4. **Track commitments** — Tracker tab lists tasks with owner, due date, status; delayed items badge in sidebar
5. **File EOD report** — Daily done/plan/issues captured; Slack message generated
6. **Log risks** — Risk register with P×I matrix; high-risk badge in sidebar
7. **Retrospective** — Post-deployment review with outcome, wins, improvements, actions, closure checklist
8. **AI assistance** — AI panel reads current deployment + tool context; answers PM questions in EN or ZH
9. **Bilingual UI** — All labels, statuses, messages available in EN and 中文
10. **Export** — Tracker and Risk Log exportable as CSV

## Out of scope (MVP)

- Persistent storage (data lives in memory; lost on page reload)
- Multi-user / real-time collaboration
- Backend / database
- Authentication beyond password gate
