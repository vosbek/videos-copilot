# F5 - Context Mastery & Infinite Sessions in Copilot CLI

> **Series**: Copilot CLI
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/F5-context-sessions`
> **Complete Branch**: `video/F5-complete`

---

## Overview

**What viewers learn**: How to manage context with `/context`, leverage auto-compression for infinite sessions, use cross-session memory, resume sessions, and delegate to cloud with `&`.

**Prerequisites**: F1 (CLI basics)

**Key files touched**: None (session management features)

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:25 | Title card | "Context is your most precious resource." | -- |
| 3 | 0:25-1:00 | Terminal: /context | Show token usage breakdown | "See exactly where your context goes." |
| 4 | 1:00-1:30 | Terminal: auto-compression | Hit high usage, show seamless compression | "At 95%, history compresses automatically." |
| 5 | 1:30-2:10 | Terminal: cross-session memory | Show Copilot remembering patterns from past sessions | "Copilot remembers your codebase conventions." |
| 6 | 2:10-2:40 | Terminal: /resume | Pick up a previous session | "Left off yesterday? Resume right where you were." |
| 7 | 2:40-3:15 | Terminal: & cloud delegation | Prefix with &, show task going to cloud | "Delegate to the cloud, keep your terminal." |
| 8 | 3:15-3:40 | Terminal: /resume cloud session | Switch back from cloud to local | "Seamlessly switch between local and cloud." |
| 9 | 3:40-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro - 10s]

> Your context window is finite. Every file read, every tool call, every conversation turn eats tokens. Understanding and managing context is the difference between a productive session and one that forgets what you told it ten minutes ago.

### SECTION 1: /context Command (0:25-1:00)

**CAMTASIA ACTION**: In an active CLI session with some history, type `/context`. Show the detailed breakdown.

> Type `/context` at any point. You get a detailed breakdown: system prompt takes X tokens, loaded customizations take Y, conversation history takes Z, tool results take W.
>
> This tells you what's eating your window. If a large file read consumed half your context, you know to be more targeted next time. If loaded skills are heavy, you might trim their instructions.

### SECTION 2: Auto-Compression (1:00-1:30)

**CAMTASIA ACTION**: Continue working until context approaches 95%. Show the compression notice and seamless continuation.

> When you approach 95% of the context limit, Copilot compresses your history automatically. No interruption - it summarizes earlier exchanges while preserving key context.
>
> This means virtually infinite sessions. You can work for hours without hitting a wall. The compression happens in the background and the agent continues seamlessly.

### SECTION 3: Cross-Session Memory (1:30-2:10)

**CAMTASIA ACTION**: Start a new session. Show Copilot applying knowledge from previous sessions - recognizing patterns, conventions.

> Copilot memory goes beyond a single session. Over time, it captures tightly scoped insights about your repository - coding conventions, architectural patterns, critical dependencies.
>
> Watch - I start a new session and ask it to add a feature. Without me saying anything, it's already following our SQLAlchemy patterns, using our test conventions, matching our error handling style. It learned these from previous sessions.
>
> These memories are repo-specific, shared across Copilot features, and auto-expire after 28 days so they don't go stale.

### SECTION 4: Session Resume and Cloud Delegation (2:10-3:40)

**CAMTASIA ACTION**: Type `/resume`. Show list of past sessions. Select one. Show context restored.

> Left off yesterday? `/resume` shows your recent sessions. Select one and you're back with the saved context. No re-explaining what you were doing.

**CAMTASIA ACTION**: Type `& Refactor the entire test suite to use pytest fixtures instead of setUp/tearDown`. Show it being sent to cloud agent.

> Now the `&` prefix. This delegates a task to the Copilot cloud agent. The task runs in a cloud environment while you keep your local terminal free.
>
> I'm sending a long refactoring task that would tie up my terminal. It starts running in the cloud immediately.

**CAMTASIA ACTION**: Type `/resume`, show the cloud session available, select it.

> Later, I type `/resume` and there's the cloud session. I can check on it, see the progress, and switch between local and cloud contexts seamlessly.

### OUTRO (3:40-3:55)

> `/context` for visibility. Auto-compression for infinite sessions. Memory for cross-session learning. `/resume` for continuity. `&` for cloud delegation. Master your context, master your workflow.
>
> That wraps the CLI series. Next: Copilot Memory deep dive. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Copilot CLI with memory enabled
- [ ] Some previous sessions to /resume from (run a few tasks beforehand)
- [ ] Work in the repo long enough to have memory insights
- [ ] Cloud agent access configured

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro | 0:15 | Template |
| 2 | /context command + breakdown | 0:35 | Zoom on token counts |
| 3 | Auto-compression happening | 0:30 | May need to artificially fill context |
| 4 | New session showing memory in action | 0:40 | Show it applying past learnings |
| 5 | /resume session selection | 0:30 | Show session list + restore |
| 6 | & cloud delegation | 0:35 | Show task going to cloud |
| 7 | /resume cloud session | 0:25 | Show switching back |
| 8 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/F5-context-sessions`)
```
- Full Tailspin Toys app
- Several past Copilot CLI sessions in history
- Copilot Memory enabled with some stored insights
- Cloud agent access configured
```

### Ending State (`video/F5-complete`)
```
Same as starting state (feature demo, not code changes)
```
