# F1 - Copilot CLI Power Modes: Plan, Execute, Autopilot

> **Series**: Copilot CLI
> **Length**: 4.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/F1-cli-modes`
> **Complete Branch**: `video/F1-complete`

---

## Overview

**What viewers learn**: The three execution modes in Copilot CLI - Plan (structured planning), Execute (step-by-step with approval), and Autopilot (full autonomous execution) - and when to use each.

**Prerequisites**: Basic terminal familiarity. Copilot CLI installed.

**Key files touched**: Various (depends on the task)

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + 3-mode diagram | Plan / Execute / Autopilot | "Three modes. Three levels of control." |
| 3 | 0:30-1:15 | Terminal: Plan mode | Shift+Tab to Plan, enter a task | "Plan mode: think before you build." |
| 4 | 1:15-1:50 | Terminal: /model comparison | Compare approaches between models | "Use /model to get a second opinion on the plan." |
| 5 | 1:50-2:40 | Terminal: Execute mode | Shift+Tab to Execute, same task | "Execute mode: step-by-step with your approval." |
| 6 | 2:40-3:30 | Terminal: Autopilot mode | Shift+Tab to Autopilot | "Autopilot: hands off, let it run." |
| 7 | 3:30-4:00 | Comparison summary | When to use which mode | "Match the mode to your trust level and task complexity." |
| 8 | 4:00-4:15 | Outro | Summary + next video | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Copilot CLI gives you three execution modes, each with a different level of autonomy. Plan mode thinks before it acts. Execute mode works step-by-step with your approval. Autopilot mode runs autonomously until the task is complete.
>
> Same task, three approaches. Let's see when each one shines.

### SECTION 1: Plan Mode (0:30-1:50)

**CAMTASIA ACTION**: Open terminal with Copilot CLI. Press Shift+Tab to cycle to Plan mode (show the mode indicator changing). Type: "Add pagination to the games API endpoint - support page, per_page, and total count."

> I press Shift+Tab and cycle to Plan mode. Watch the indicator change in the prompt area.
>
> I'll ask it to add pagination. In plan mode, Copilot doesn't write any code. It analyzes the request, asks clarifying questions about page size defaults and response format, then builds a structured implementation plan.
>
> Steps: modify the games route to accept query parameters, update the SQLAlchemy query with offset and limit, return pagination metadata in the response, update the tests.
>
> This is your checkpoint. You can review, revise, or reject before anything happens.

**CAMTASIA ACTION**: Type `/model` to compare approaches. Show output from a different model.

> And here's a power move - `/model` lets you compare how different models would plan the same task. Maybe one suggests cursor-based pagination while the other suggests offset-based. You pick the approach, then shift into execution.

### SECTION 2: Execute Mode (1:50-2:40)

**CAMTASIA ACTION**: Shift+Tab to Execute mode. Start the task. Show Copilot pausing for approval at each step.

> Now Shift+Tab to Execute mode. Same task. But this time Copilot works through it step by step, pausing for your approval at each stage.
>
> "I'll modify server/routes/games.py to add pagination parameters." Approve. "I'll update the SQLAlchemy query." Approve. "I'll run the tests to verify." Approve.
>
> You're in the loop for every action. This is your mode when you trust the direction but want to verify each step.

### SECTION 3: Autopilot Mode (2:40-3:30)

**CAMTASIA ACTION**: Shift+Tab to Autopilot mode. Same task on a fresh branch. Let it run autonomously. Show it executing tools, running commands, self-correcting.

> Finally, Autopilot. Shift+Tab to the third mode. Same task, but now Copilot runs autonomously. It approves its own tool calls, retries on errors, and iterates until it decides the task is done.
>
> Watch - it's editing the route, updating tests, running pytest, finding a failure, fixing it, re-running tests, passing. All without a single prompt from me.
>
> This is for tasks you fully trust the agent to handle end-to-end.

### SECTION 4: When to Use Which (3:30-4:00)

**CAMTASIA ACTION**: Show a simple comparison table on screen.

> So when do you use each? Plan mode when you want to think before you act - architecture decisions, complex features, unfamiliar code. Execute mode when you know what to do but want verification at each step. Autopilot when the task is well-defined and you trust the outcome.
>
> And you can switch mid-session. Start in Plan, review the approach, Shift+Tab into Autopilot to let it execute.

### OUTRO (4:00-4:15)

> Three modes, one key: Shift+Tab. Match the mode to your trust level and task complexity.
>
> Next: `/fleet` for parallel agent orchestration. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/F1-cli-modes`
- [ ] Copilot CLI installed and logged in
- [ ] Terminal font: 16pt+
- [ ] Clean terminal history
- [ ] Three clean branches ready (one for each mode demo, or reset between)
- [ ] Games endpoint without pagination (starting state)

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + 3-mode diagram | 0:20 | Overlay graphic |
| 2 | Shift+Tab to Plan mode + enter task | 0:45 | Show mode indicator clearly |
| 3 | /model comparison | 0:35 | Quick, show different approach |
| 4 | Shift+Tab to Execute, step-by-step approvals | 0:50 | Show approve prompts |
| 5 | Shift+Tab to Autopilot, full autonomous run | 0:50 | Speed up 3x |
| 6 | Comparison summary table | 0:30 | Overlay table |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/F1-cli-modes`)
```
- Full Tailspin Toys app with games endpoint (no pagination)
- Tests passing
- Copilot CLI configured
```

### Ending State (`video/F1-complete`)
```
- server/routes/games.py (updated with pagination)
- server/tests/test_games.py (updated with pagination tests)
```
