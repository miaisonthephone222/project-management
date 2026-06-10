---
type: moc
project: Valtec-PM
visibility: company
status: active
date: 2026-06-10
owner: mia.lin
tags: [excalibrain, graphrag, hub]
---

# Valtec-PM — ExcaliBrain

Graph entry point. Open with ExcaliBrain plugin (ribbon icon or command palette).

The graph is built from `parent:`, `child:`, and `friend:` frontmatter fields across vault notes.
Central node: [[CONTEXT]] (the entity registry).

## Graph conventions

- `parent:` — this note is a component of the parent
- `child:` — the parent contains this note
- `friend:` — related, peer-level relationship
- `entities:` — list of CONTEXT.md entities this note touches
