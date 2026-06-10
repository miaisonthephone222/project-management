---
type: moc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [context, entities, graphrag]
---

# Valtec-PM — Context & Entity Registry

Canonical vocabulary. Every named component, concept, and role is defined here. This file is the ExcaliBrain graph root — all other notes link back here via `friend:` frontmatter.

For Valtec domain terms (Fulcan, VERO, LARUS, MARLIN, SkAI, streams) see valtec-brain `CONTEXT.md`.

---

## Entities

**Valtec-PM Console**:
The internal web app (`index.html` + `script.js` + `style.css`) used to manage UAV maritime deployment projects. A single-page, vanilla HTML/CSS/JS tool — no framework, no build step.
_Avoid_: "PM tool", "PM webapp", "the dashboard" — always call it "PM Console" or "Valtec-PM Console".

**Deployment**:
A single UAV maritime mission lifecycle tracked in the PM Console. Each deployment has a unique Project ID, a client, a vessel, a location, and progresses through Planning → Active → Done.
_Avoid_: "project" (ambiguous — use "deployment" for individual missions, "project" only for the PM Console codebase itself).

**Charter**:
The first tool tab inside a deployment. Captures Project Info (name, ID, client, vessel, location, PM, contact window, dates, status), Objective, Success Criteria, Detailed Information, and Milestones.
_Avoid_: "overview", "summary tab".

**Tracker**:
The Commitment Tracker tool tab. Rows of commitment / owner / due date / status / note. Feeds delayed-item badge in the sidebar.
_Avoid_: "task list", "action items tab".

**EOD Report**:
End-of-Day Report tool tab. Daily close-out: completed today, planned for tomorrow, issues & blockers.
_Avoid_: "daily report", "daily log".

**Risk Log**:
Tool tab containing both the Risk Register (probability × impact matrix) and the Issue Log.
_Avoid_: "risk tab", "risk matrix".

**Retrospective**:
Tool tab for post-deployment review: outcome (full/partial/miss), what went well, needs improvement, action items, closure checklist.
_Avoid_: "retro tab", "lessons tab".

**AI Agent panel**:
The sliding right-hand panel powered by the Anthropic Claude API (`claude-sonnet-4-6`). Opened via the sparkles button. Reads current deployment context and tool state. API key stored in `localStorage` as `valtec_api_key`.
_Avoid_: "chatbot", "Claude panel", "AI tab".

**Slack integration**:
Each tool tab has a "Review & Send" button that generates a formatted Slack message and shows a preview modal before sending to `#project-management`.
_Avoid_: "Slack button", "send to Slack feature".

**deps**:
The in-memory JS object keyed by deployment ID that holds all deployment data for the current session. Persisted via `saveCurrent()` / `loadDep()`.
_Avoid_: "data store", "state object" — call it `deps` in code references.

**T object**:
The bilingual translation dictionary (`T.en` / `T.zh`) in `script.js`. All user-visible strings must be keyed here. Accessed via `t('key')`.
_Avoid_: "i18n object", "locale file".
