# A2 - Multi-Agent Orchestration with Subagents

> **Series**: Agents & Orchestration
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A2-subagent-orchestration`
> **Complete Branch**: `video/A2-complete`

---

## Overview

**What viewers learn**: How to create a coordinator agent that delegates to specialized subagents, each with isolated context and restricted tools.

**Prerequisites**: A1 (custom agents)

**Key files touched**:
- `.github/agents/architect.agent.md`
- `.github/agents/implementer.agent.md`
- `.github/agents/reviewer.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + diagram | Show coordinator -> workers diagram | "Subagents let a coordinator delegate focused work to specialists." |
| 3 | 0:30-1:15 | Editor: architect.agent.md | Show the coordinator agent config | "The architect agent is our coordinator. It plans and delegates." |
| 4 | 1:15-1:50 | Editor: implementer.agent.md | Show the worker agent - edit tools | "The implementer has full edit access but follows the architect's plan." |
| 5 | 1:50-2:20 | Editor: reviewer.agent.md | Show read-only review agent | "The reviewer only reads - it can't be influenced by wanting to 'fix' things." |
| 6 | 2:20-2:40 | Diagram overlay | Quick recap of the architecture | "Three agents, three roles, isolated context." |
| 7 | 2:40-4:15 | Chat: live demo | Ask architect to add a new API endpoint | "Let's add a categories endpoint and watch the orchestration." |
| 8 | 4:15-4:35 | Agent Debug Panel | Show the delegation events | "In the debug panel you can see each delegation and return." |
| 9 | 4:35-4:50 | Recap + outro | Summary and next video | "Coordinator, workers, isolated context - that's subagent orchestration." |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> When one agent does everything, its context window fills up fast - every file read, every search result, every intermediate step. Subagents solve this. A coordinator delegates focused tasks to workers, each in their own clean context. They do the work and return just a summary.
>
> Let's build a three-agent system: architect, implementer, and reviewer.

### SECTION 1: The Coordinator - architect.agent.md (0:30-1:15)

**CAMTASIA ACTION**: Open `.github/agents/architect.agent.md`. Zoom into frontmatter showing tools and subagents config.

> This is our architect agent. In the frontmatter, notice the `subagents` field - this is where you declare which agents this coordinator can delegate to.
>
> It lists `implementer` and `reviewer` as available subagents. The architect itself has read-only tools - it can explore the codebase and plan, but it doesn't edit code directly.
>
> In the instructions, I've told it: "Break tasks into clear subtasks. Delegate implementation to the implementer agent. Once implementation is done, delegate a review to the reviewer. Synthesize their results into a final report."

### SECTION 2: The Worker - implementer.agent.md (1:15-1:50)

**CAMTASIA ACTION**: Open `.github/agents/implementer.agent.md`. Highlight tools list showing edit capabilities.

> The implementer is where the actual code gets written. It has full edit access - `editFile`, `createFile`, `runTerminal` for running tests.
>
> But here's the key - it receives a focused brief from the architect, not the entire conversation history. Its instructions say: "Implement exactly what the coordinator requests. Run tests after changes. Report back what you built and whether tests pass."
>
> Clean context. Focused task. Report back.

### SECTION 3: The Reviewer - reviewer.agent.md (1:50-2:20)

**CAMTASIA ACTION**: Open `.github/agents/reviewer.agent.md`. Show read-only tools.

> The reviewer is deliberately read-only. It gets `readFile`, `search`, `grep` - no editing. Why? Because a reviewer that can also edit is tempted to "just fix it." We want unbiased feedback.
>
> Its instructions: "Review the implementation for correctness, security, and adherence to project patterns. Report issues with severity and location."

### SECTION 4: Architecture Recap (2:20-2:40)

**CAMTASIA ACTION**: Show a simple diagram overlay: Architect at top, arrows down to Implementer and Reviewer.

> So we have three agents, three roles. The architect coordinates but doesn't code. The implementer codes but doesn't review. The reviewer reads but doesn't write. Each gets a clean context and the right tools for their job.

### SECTION 5: Live Demo (2:40-4:15)

**CAMTASIA ACTION**: Select the Architect agent in chat. Type: "Add a new categories API endpoint with full CRUD operations, following the same patterns as the existing games endpoint. Include tests." Watch the orchestration unfold.

> Let's see it work. I'll ask the architect to add a categories API endpoint to our Tailspin Toys app.
>
> Watch - the architect first explores the existing games endpoint to understand the patterns. It reads the model, the route, the tests. Then it creates a plan.
>
> Now it's delegating to the implementer. Notice in the chat - it says "Delegating to implementer" with a clear brief: create the category model, route, and register the blueprint.
>
> The implementer works in its own context. It creates the files, runs the tests... and reports back.
>
> Now the architect delegates to the reviewer. The reviewer reads the new code, compares it to the existing patterns, and returns its assessment.
>
> The architect synthesizes everything: "Implementation complete. Three files created. Tests passing. Reviewer flagged one suggestion - add input validation on category name length."

### SECTION 6: Debug Panel (4:15-4:35)

**CAMTASIA ACTION**: Open Agent Debug Panel (Chat view > ... > Show Agent Debug Logs). Scroll through events showing subagent delegation.

> If you open the Agent Debug Panel, you can see every delegation event - the brief sent to each subagent, the tools they used, and the summary they returned. This is invaluable for debugging orchestration.

### OUTRO (4:35-4:50)

> Coordinator, workers, isolated context - that's subagent orchestration. Each agent stays focused while the coordinator manages the big picture.
>
> Next video: agent handoffs for sequential workflows. Branch link below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A2-subagent-orchestration`
- [ ] Verify all three .agent.md files exist and are correct
- [ ] Pre-test the prompt to know roughly what the orchestration looks like
- [ ] Have the games endpoint code visible (the pattern to follow)
- [ ] Open Agent Debug Panel before recording take 5

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card with diagram | 0:30 | Diagram can be a PNG overlay |
| 2 | Walk through architect.agent.md | 0:45 | Zoom on subagents field |
| 3 | Walk through implementer.agent.md | 0:35 | Zoom on tools list |
| 4 | Walk through reviewer.agent.md | 0:30 | Emphasize read-only |
| 5 | Architecture diagram overlay | 0:20 | Quick, simple |
| 6 | Live demo - full orchestration | 1:35 | Longest take - may need speedup in post |
| 7 | Agent Debug Panel walkthrough | 0:20 | Quick scroll through events |
| 8 | Outro | 0:15 | Template |

### Post-Recording
- [ ] Speed up AI "thinking" time in the demo (2-4x)
- [ ] Callout annotations when subagent delegation happens
- [ ] Zoom on each agent file's key fields
- [ ] Lower thirds: "Coordinator", "Worker", "Reviewer", "Live Demo"
- [ ] Overlay arrows/diagram during architecture recap

---

## Demo Repo Branch Spec

### Starting State (`video/A2-subagent-orchestration`)
```
- .github/agents/architect.agent.md (coordinator with subagents config)
- .github/agents/implementer.agent.md (edit access)
- .github/agents/reviewer.agent.md (read-only)
- server/routes/games.py (existing pattern to follow)
- server/models/game.py (existing model pattern)
- server/tests/test_games.py (existing test pattern)
- NO categories endpoint exists yet
```

### Ending State (`video/A2-complete`)
```
All starting state PLUS:
- server/models/category.py (new model)
- server/routes/categories.py (new CRUD routes)
- server/tests/test_categories.py (new tests)
- server/app.py (updated to register categories blueprint)
```
