# F2 - /fleet: Parallel Agent Orchestration from the Terminal

> **Series**: Copilot CLI
> **Length**: 4.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/F2-fleet`
> **Complete Branch**: `video/F2-complete`

---

## Overview

**What viewers learn**: How `/fleet` decomposes a task into parallel work items, dispatches subagents, manages dependencies, and synthesizes results - all from the terminal.

**Prerequisites**: F1 (CLI modes), A2 (subagent concepts)

**Key files touched**: Multiple files across API, UI, and tests

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + parallel diagram | Task -> Orchestrator -> N parallel agents | "Parallelize your work from a single prompt." |
| 3 | 0:30-1:10 | Terminal: /fleet command | Enter the fleet prompt | "One prompt. Multiple agents. Simultaneous work." |
| 4 | 1:10-1:40 | Terminal: review the plan | Inspect the decomposition | "Review the parallel plan before it executes." |
| 5 | 1:40-2:20 | Terminal: /tasks dialog | Watch parallel execution | "Use /tasks to monitor running agents." |
| 6 | 2:20-3:00 | Terminal: updates stream | See updates from different tracks | "Updates reference separate tracks moving simultaneously." |
| 7 | 3:00-3:30 | Terminal: results synthesis | Final summary of all completed work | "Orchestrator synthesizes the results." |
| 8 | 3:30-4:00 | Tips: effective fleet prompts | Show good vs bad prompts | "Your prompt quality determines parallelization quality." |
| 9 | 4:00-4:15 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> In VS Code, subagent orchestration lives in your agent files. In Copilot CLI, it's one command: `/fleet`. You give it a task, it breaks it into independent work items, dispatches agents in parallel, and synthesizes the results.

### SECTION 1: Launch the Fleet (0:30-1:40)

**CAMTASIA ACTION**: In Copilot CLI, type `/fleet` then the prompt: "Add a complete publishers feature to the Tailspin Toys app. This needs: 1) A Publisher SQLAlchemy model with name, website, and founded_year fields. 2) Flask CRUD routes following the games endpoint pattern. 3) Svelte frontend component for listing publishers. 4) Python unit tests for the API. 5) Playwright e2e tests for the frontend."

> I'm asking fleet to add a publishers feature across the full stack. Notice I'm being specific about deliverables - each one maps to a concrete artifact. This is key for good parallelization.
>
> The orchestrator analyzes the prompt and decomposes it. Let me review the plan before it starts.

**CAMTASIA ACTION**: Show the plan output - which work items it identified, their dependencies, which can run in parallel.

> It identified five work items. The model and routes can happen first - they're independent foundations. The frontend component depends on the API being done. The unit tests can run alongside the routes. The e2e tests depend on both the API and frontend.
>
> So it'll run three tracks in parallel initially: model, routes, and unit tests. Then the frontend. Then the e2e tests.

### SECTION 2: Monitoring Execution (1:40-3:00)

**CAMTASIA ACTION**: Let fleet execute. Use `/tasks` to open the tasks dialog.

> Fleet is running. I type `/tasks` to see the task dashboard.
>
> Three agents active simultaneously. Track 1 is building the SQLAlchemy model. Track 2 is scaffolding the Flask routes. Track 3 is writing unit tests.

**CAMTASIA ACTION**: Show updates streaming from different tracks.

> Watch the updates - they reference separate tracks. "Track 1: Publisher model created." "Track 3: 5 unit tests written, running pytest." "Track 2: CRUD routes registered."
>
> Now the dependency kicks in - Tracks 1 and 2 are done, so the frontend agent starts. Track 3's tests found one issue, the agent is self-correcting.

**CAMTASIA ACTION**: Show the final synthesis.

> All tracks complete. The orchestrator synthesizes: five files created across model, routes, frontend, and tests. All tests passing. Here's the complete diff summary.

### SECTION 3: Effective Fleet Prompts (3:30-4:00)

**CAMTASIA ACTION**: Show a comparison of good vs bad fleet prompts.

> Your prompt determines how well fleet parallelizes. Bad prompt: "Add publishers to the app." Vague. Fleet can't decompose what it can't understand.
>
> Good prompt: List specific deliverables. Map each to a concrete artifact - a file, a test suite, a component. The more structure you give, the better fleet distributes the work.

### OUTRO (4:00-4:15)

> `/fleet` is parallel subagents from the terminal. Structure your prompt around concrete deliverables and let the orchestrator handle the rest.
>
> Next: CLI customization stack. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/F2-fleet`
- [ ] Copilot CLI with fleet support
- [ ] No publishers feature exists (we're adding it)
- [ ] Games endpoint exists as the pattern to follow
- [ ] Pre-test with a simpler fleet task to verify it works

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + parallel diagram | 0:20 | Overlay |
| 2 | /fleet command + prompt entry | 0:40 | Show the full prompt |
| 3 | Plan review | 0:30 | Zoom on dependency graph |
| 4 | /tasks dialog during execution | 0:40 | Show parallel agents |
| 5 | Update stream from tracks | 0:40 | Speed up waiting 3-4x |
| 6 | Final synthesis | 0:30 | Show diff summary |
| 7 | Good vs bad prompt comparison | 0:30 | Side-by-side overlay |
| 8 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/F2-fleet`)
```
- Full Tailspin Toys app with games (no publishers)
- Games model/routes/tests as the pattern
- Svelte frontend with GameList component as pattern
```

### Ending State (`video/F2-complete`)
```
- server/models/publisher.py
- server/routes/publishers.py
- server/tests/test_publishers.py
- client/src/components/PublisherList.svelte
- client/src/pages/publishers.astro
- client/e2e-tests/publishers.spec.ts
- server/app.py (updated to register publishers blueprint)
```
