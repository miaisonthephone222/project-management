---
type: tech-doc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [agent, strategy]
friend: [[CONTEXT]]
---

# Subagent Strategy — Valtec-PM Console

## When to use subagents

- Broad codebase search (spawn Explore agent)
- Independent parallel tasks (e.g., research + implementation)
- Code review before merging a large change

## When NOT to use subagents

- Simple single-file edits
- Tasks that depend sequentially on each other
- When context from the current session is needed

## Claude Code specific

- Use `Explore` agent for: "where is X defined", "which files reference Y"
- Use `Agent` for multi-step tasks that would pollute main context
- Always read CONTEXT.md before spawning an agent on a design task
