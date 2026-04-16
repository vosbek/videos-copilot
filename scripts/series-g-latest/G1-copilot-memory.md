# G1 - Copilot Memory: Agents That Learn Your Codebase

> **Series**: Latest 2026 Features
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G1-copilot-memory`
> **Complete Branch**: `video/G1-complete`

---

## Overview

**What viewers learn**: How agentic memory captures repo-specific insights, shares them across coding agent/CLI/code review, auto-expires stale info, and measurably improves outcomes.

**Prerequisites**: General Copilot familiarity.

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card | "Agents that learn" | "Copilot remembers your conventions, patterns, and preferences." |
| 3 | 0:30-1:05 | Diagram: memory architecture | Show how memories flow across surfaces | "Memories are repo-specific, cross-surface, and auto-expiring." |
| 4 | 1:05-1:45 | GitHub: memory settings | Show where to manage memories | "You control what Copilot remembers." |
| 5 | 1:45-2:30 | Terminal: memory in action | New session uses past knowledge | "It already knows your patterns." |
| 6 | 2:30-3:00 | VS Code: code review with memory | Show memory-informed review | "Code review gets smarter too." |
| 7 | 3:00-3:25 | Stats card | 7% PR merge rate increase | "Measurable results." |
| 8 | 3:25-3:40 | Memory curation | Show editing/deleting memories | "Curate what it knows." |
| 9 | 3:40-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Every time you work with Copilot, it learns something about your codebase - your naming conventions, your test patterns, your architectural decisions. Copilot Memory captures these insights and carries them across sessions, across features, even across team members.

### SECTION 1: How Memory Works (0:30-1:05)

**CAMTASIA ACTION**: Show a diagram of memory flow: coding agent learns -> memory stored -> CLI uses it -> code review uses it.

> Memories are tightly scoped, repo-specific insights. When the coding agent notices you always use pytest fixtures over setUp, it stores that. When you use CLI next week, it applies that knowledge automatically.
>
> Three key properties: memories are validated against the current codebase before use - if the code changed, stale memories are ignored. They're shared across all Copilot surfaces. And they auto-expire after 28 days so they never go stale.

### SECTION 2: Managing Memories (1:05-1:45)

**CAMTASIA ACTION**: Open GitHub settings for Copilot Memory. Show the list of stored memories.

> You're always in control. In your GitHub settings, you can see every memory Copilot has stored. Each one shows what it learned, when, and from which session.
>
> You can delete individual memories, disable memory entirely, or scope it per repository.

### SECTION 3: Memory in Action (1:45-3:00)

**CAMTASIA ACTION**: Start a fresh Copilot CLI session. Ask it to add a new feature. Show it applying learned conventions without being told.

> Fresh session. I'm asking it to add a user ratings feature. Watch - without any instruction files telling it to, it's using our SQLAlchemy model patterns, our Flask blueprint structure, our pytest fixture approach. It learned all of this from past sessions.
>
> It even remembers that we put validation in a separate middleware layer, not inline in routes. That's a project-specific pattern it picked up.

**CAMTASIA ACTION**: Show a Copilot code review on a PR. Highlight a memory-informed comment.

> And it works in code review too. Here's a PR review where Copilot caught that a new endpoint doesn't follow the project's pagination convention. It knows about that convention from memory, not from instructions.

### SECTION 4: The Numbers (3:00-3:40)

**CAMTASIA ACTION**: Show stats card overlay.

> The results are measurable. 7% increase in PR merge rates for the coding agent - 90% with memories versus 83% without. 2% increase in positive feedback on code review comments. Both statistically significant.

**CAMTASIA ACTION**: Show memory curation interface.

> If a memory is wrong or outdated, curate it. Delete the ones that no longer apply, keep the ones that help. Think of it as teaching a new team member - over time, they need less guidance.

### OUTRO (3:40-3:55)

> Copilot Memory makes every surface smarter over time. Cross-session, cross-surface, auto-expiring, curateable. It's the closest thing to an AI that actually knows your project.
>
> Next: Cloud Agent for research and planning. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Copilot Memory enabled on your account
- [ ] Several past sessions generating memories
- [ ] GitHub settings page bookmarked (for memory management)
- [ ] A PR open for the code review demo

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:20 | Template |
| 2 | Memory architecture diagram | 0:35 | Overlay animation |
| 3 | GitHub memory settings | 0:40 | Show real stored memories |
| 4 | CLI session with memory in action | 0:45 | Show it applying conventions |
| 5 | Code review with memory-informed comment | 0:30 | Zoom on the comment |
| 6 | Stats card | 0:25 | Overlay |
| 7 | Memory curation | 0:15 | Quick edit/delete |
| 8 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G1-copilot-memory`)
```
- Full Tailspin Toys app
- Copilot Memory enabled with stored insights
- A PR branch with some changes for review demo
```

### Ending State (`video/G1-complete`)
```
Same (feature demo, not code changes)
```
