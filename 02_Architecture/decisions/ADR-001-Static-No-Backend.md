---
type: adr
project: Valtec-PM
status: accepted
date: 2026-06-10
owner: mia.lin
tags: [adr, architecture]
entities: [Valtec-PM Console]
friend: [[CONTEXT]]
---

# ADR-001 — Static site, no backend

## Status

Accepted

## Context

The PM Console needs to be shareable across the Valtec team quickly. Options: build a full-stack app with a backend, or ship a static HTML/CSS/JS file hosted on GitHub Pages.

## Decision

Ship as a fully static site with no backend, no build step, and no framework. Deploy to GitHub Pages.

## Consequences

- **Good:** Zero infra cost, instant deploy on push, no server maintenance, works offline after first load.
- **Bad:** No persistent storage (data lost on refresh), no multi-user sync, password security is weak (hardcoded in JS).
- **Follow-on:** BL-001 (localStorage persistence) and BL-003 (multi-user) tracked in backlog for post-MVP.
