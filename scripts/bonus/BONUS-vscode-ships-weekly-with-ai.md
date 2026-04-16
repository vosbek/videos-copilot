# BONUS - How VS Code Ships Weekly with AI Agents

> **Series**: Capstone
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: N/A (case study, no hands-on branch)
> **Complete Branch**: N/A

---

## Overview

**What viewers learn**: Real-world case study of how the VS Code team uses AI agents to go from monthly to weekly releases - agent-powered issue triage, commit summarization, release notes, and code review.

**Prerequisites**: All prior videos (this ties everything together).

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> For ten years, VS Code shipped monthly. Now it ships weekly. The difference? AI agents at every stage of the development pipeline. This isn't hypothetical - this is how VS Code actually works today. Let's look under the hood.

### SECTION 1: The Agent-Powered Pipeline (0:30-1:30)

**CAMTASIA ACTION**: Show a pipeline diagram: Issues -> Triage Agent -> Development -> Commit Agent -> Review Agent -> Release Notes Agent -> Weekly Release.

> The VS Code team built agent pipelines for every part of how they ship. Not just for writing code - for everything around building features.
>
> Issue triage: an agent classifies, labels, and routes new issues. It reads the issue, understands the codebase context, and assigns it to the right team.
>
> Commit summarization: after each PR merges, an agent generates a concise summary that feeds into the release notes pipeline.
>
> Code review: the agentic code review we covered in G3 catches issues before they merge.
>
> Release notes: an agent reads all merged PRs since the last release, groups them by feature area, and drafts the release notes. A human reviews and publishes.

### SECTION 2: Agent Patterns They Use (1:30-2:30)

**CAMTASIA ACTION**: Show examples of each pattern in their workflow - map to the video series.

> Every pattern we've covered in this series shows up here. Custom agents with specialized personas - their triage agent has different instructions than their release notes agent. Subagent orchestration - complex features get a planning agent that delegates to specialists.
>
> Skills for recurring tasks - generating changelogs follows a specific format every time, encoded as a skill. Hooks for guardrails - their CI pipeline enforces test coverage, lint standards, and security checks automatically.
>
> And the Copilot SDK powers the custom tooling that ties it all together - the agents that run in GitHub Actions, not in an IDE.

### SECTION 3: The Impact (2:30-3:15)

**CAMTASIA ACTION**: Stats overlay with before/after metrics.

> The results: monthly to weekly releases. That's a 4x increase in ship cadence. The agents handle the mechanical work - triage, summarization, formatting, initial review - so developers spend their time on design decisions and complex problem-solving.
>
> This isn't replacing developers. It's removing the toil that slows developers down.

### SECTION 4: Connecting to Your Work (3:15-4:30)

**CAMTASIA ACTION**: Show a mapping of VS Code's agents to what we've built in this series.

> You've built all the pieces over this video series. The VS Code team's triage agent? That's a custom agent like A1. Their release notes pipeline? Subagent orchestration like A2. Their test enforcement? Hooks like A7. Their SDK-powered CI tools? G6.
>
> The scale is different, but the patterns are identical. You can start applying these today: build a triage agent for your repo's issues, add a commit summary skill, create a code review coordinator, and connect them with the SDK in your CI pipeline.

### SECTION 5: Getting Started (4:30-4:45)

**CAMTASIA ACTION**: Show the Tailspin Toys demo repo with all customizations from the series.

> Every agent, skill, hook, and configuration from this entire series lives in the demo repo. Check out any branch, follow along with any video, and build these patterns into your own workflow.

### OUTRO (4:45-5:00)

> From custom agents to SDK-powered pipelines - that's the advanced Copilot toolkit. The VS Code team proved these patterns at scale. Now it's your turn.
>
> Thanks for watching the Advanced Copilot series.

[Branded outro with series logo]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] All diagrams and graphics prepared (this is more presentation than demo)
- [ ] VS Code blog post open for reference
- [ ] Series mapping graphic ready (video ID -> VS Code team's usage)
- [ ] Demo repo with all branches ready to show

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro | 0:20 | Template |
| 2 | Pipeline diagram walkthrough | 1:00 | Animated diagram with stages |
| 3 | Pattern mapping examples | 1:00 | Show code/configs from their setup |
| 4 | Stats/impact overlay | 0:45 | Before/after metrics |
| 5 | Mapping to our series | 1:15 | Side-by-side: our agents -> their agents |
| 6 | Demo repo showcase | 0:15 | Quick scroll |
| 7 | Outro (series finale) | 0:15 | Series logo, thank you |

---

## Notes

This is the capstone video - it should feel like the "graduation" moment.
Reference specific videos throughout ("Remember A2 where we built the coordinator?").
This is the most presentation-heavy video in the series - more diagrams and overlays, less live coding.
Consider ending with a montage of clips from across the series.
