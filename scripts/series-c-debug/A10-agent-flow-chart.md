# A10 - Agent Flow Chart: Visualizing Orchestration

> **Series**: Debugging & Visibility
> **Length**: 3.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A10-flow-chart`
> **Complete Branch**: `video/A10-complete`

---

## Overview

**What viewers learn**: How to use the Agent Flow Chart to visualize multi-agent orchestration, inspect individual nodes, and understand complex workflows at a glance.

**Prerequisites**: A2 (subagents) or A4a (TDD orchestration)

**Key files touched**: None (visualization of existing orchestration)

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:25 | Title card | "Visualize your orchestration" | "See the full picture of multi-agent workflows." |
| 3 | 0:25-0:55 | VS Code: trigger a multi-agent task | Run TDD coordinator from A4a | "First, let's create something to visualize." |
| 4 | 0:55-1:20 | Open Agent Flow Chart | Chat view > Summary > Agent Flow Chart | "Now open the flow chart." |
| 5 | 1:20-1:55 | Flow chart: overview | Pan/zoom the full graph | "The coordinator at the top, delegations flowing down." |
| 6 | 1:55-2:30 | Flow chart: inspect nodes | Click on individual nodes | "Click any node to see its details." |
| 7 | 2:30-2:55 | Flow chart: follow the data | Trace data flow between nodes | "Follow the context from coordinator to subagent and back." |
| 8 | 2:55-3:15 | Comparing patterns | Show sequential (A4a) vs parallel (A4b) in flow chart | "Different patterns look different." |
| 9 | 3:15-3:25 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro - 10s]

> When you have a coordinator delegating to three subagents, some running in parallel, some in sequence - how do you see the big picture? The Agent Flow Chart turns orchestration into a visual graph.

### SECTION 1: Create the Orchestration (0:25-0:55)

**CAMTASIA ACTION**: Select TDD Coordinator agent. Type a task. Let it run through the full red-green-refactor cycle. (Speed up in post.)

> Let me trigger our TDD coordinator from earlier. It'll delegate to Red, Green, and Refactor in sequence. I'll speed this up so we can focus on the visualization.

### SECTION 2: Open the Flow Chart (0:55-1:20)

**CAMTASIA ACTION**: In Chat view, click Summary at the top. Then click "Agent Flow Chart" button. The flow chart opens.

> Once the orchestration completes, click Summary in the chat view, then "Agent Flow Chart." The visualization builds from your session's event data.

### SECTION 3: Reading the Graph (1:20-2:30)

**CAMTASIA ACTION**: Pan and zoom around the flow chart. Point out node types - coordinator at top, delegation arrows, subagent work, return arrows.

> The coordinator is the root node at the top. Each delegation is an arrow down to a subagent. You can see Red was first, then Green, then Refactor - the sequential pattern is visually obvious.
>
> Each node is color-coded. Blue for the coordinator, green for successful subagent completions, and red if anything failed.

**CAMTASIA ACTION**: Click on the "Red" subagent node. Show the detail panel.

> Click any node and the detail panel shows everything about that step - what brief it received, which tools it called, how long it took, and what it returned. This is the same data as the debug panel, but in a spatial layout.
>
> I can see Red received the brief "Write failing tests for search functionality," made three tool calls - two createFile and one runTerminal - and returned in 12 seconds.

### SECTION 4: Comparing Patterns (2:30-3:15)

**CAMTASIA ACTION**: Show a second flow chart from a parallel fan-out (A4b). Compare the shape - sequential chain vs fan-out.

> Let me show you a parallel pattern for contrast. This is the review fan-out from A4b. See the difference? The coordinator has three arrows going down simultaneously - security, performance, accessibility - instead of a sequential chain.
>
> The shape of your flow chart tells you about your orchestration at a glance. Sequential chains are tall and narrow. Fan-outs are wide. Hybrid patterns branch and merge.

### OUTRO (3:15-3:25)

> The flow chart is your map when orchestrations get complex. Combined with the debug panel, you have full visibility into what happened, when, and why. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A10-flow-chart`
- [ ] TDD agents from A4a ready to run
- [ ] Review coordinator from A4b ready to run
- [ ] Pre-run both once to verify flow chart generates

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:15 | Template |
| 2 | Trigger TDD orchestration | 0:30 | Speed up 4x in post |
| 3 | Open flow chart view | 0:25 | Show the navigation path |
| 4 | Pan/zoom the graph + explain nodes | 0:35 | Move slowly, narrator guides |
| 5 | Click nodes, show detail panel | 0:35 | Zoom into details |
| 6 | Show parallel pattern for comparison | 0:25 | Quick side-by-side |
| 7 | Outro | 0:10 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A10-flow-chart`)
```
- TDD coordinator + red/green/refactor agents from A4a
- Review coordinator + 3 reviewer agents from A4b
- Full Tailspin Toys app
```

### Ending State (`video/A10-complete`)
```
Same as starting state (visualization is observational)
```
