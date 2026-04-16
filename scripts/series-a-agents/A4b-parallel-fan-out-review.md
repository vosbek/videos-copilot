# A4b - Parallel Fan-Out: Multi-Perspective Code Review

> **Series**: Agents & Orchestration
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A4b-parallel-review`
> **Complete Branch**: `video/A4b-complete`

---

## Overview

**What viewers learn**: How to fan out to multiple subagents running in parallel for independent, unbiased reviews, then synthesize results.

**Prerequisites**: A1, A2

**Key files touched**:
- `.github/agents/review-coordinator.agent.md`
- `.github/agents/security-reviewer.agent.md`
- `.github/agents/performance-reviewer.agent.md`
- `.github/agents/accessibility-reviewer.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title + fan-out diagram | Coordinator -> 3 parallel arrows | "Parallel subagents give you independent, unbiased reviews." |
| 3 | 0:30-1:00 | Editor: review-coordinator | Show parallel delegation config | "The coordinator fans out to three reviewers simultaneously." |
| 4 | 1:00-1:20 | Editor: security-reviewer | Quick look at security persona | "Each reviewer has a different lens." |
| 5 | 1:20-1:35 | Editor: performance-reviewer | Quick look at perf persona | "Performance looks at queries, memory, caching." |
| 6 | 1:35-1:50 | Editor: accessibility-reviewer | Quick look at a11y persona | "Accessibility checks WCAG compliance and screen readers." |
| 7 | 1:50-3:20 | Chat: live demo | Run parallel review on recent PR | "Three reviews, running simultaneously, completely independent." |
| 8 | 3:20-3:40 | Agent Sessions view | Show parallel execution | "You can see all three running at the same time." |
| 9 | 3:40-3:55 | Chat: synthesized report | Show coordinator's unified report | "The coordinator merges everything into a prioritized report." |
| 10 | 3:55-4:05 | Outro | Next video + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> When you ask one agent to review code for security, performance, and accessibility, it mixes all three concerns in one pass. Findings bleed into each other. But with parallel subagents, each reviewer works independently - no cross-contamination, no bias.
>
> Let's build a fan-out review system with three parallel subagents.

### SECTION 1: The Architecture (0:30-1:50)

**CAMTASIA ACTION**: Open `review-coordinator.agent.md`. Zoom into subagents list.

> The review coordinator is our fan-out point. It has three subagents listed, and its instructions say: "Delegate to all three reviewers simultaneously. Do not share one reviewer's findings with another. Wait for all to complete, then synthesize into a single prioritized report."
>
> The key word is "simultaneously" - Copilot will run these in parallel.

**CAMTASIA ACTION**: Quick flip through each reviewer agent (5-10 seconds each). Zoom into the unique instructions of each.

> Each reviewer has a specialized lens. Security checks for OWASP top 10, injection risks, authentication gaps. Performance looks at N+1 queries, missing indexes, unnecessary allocations, caching opportunities. Accessibility checks WCAG 2.1 compliance, ARIA labels, keyboard navigation, screen reader compatibility.
>
> All three are read-only. All three operate in isolated context.

### SECTION 2: Live Demo (1:50-3:40)

**CAMTASIA ACTION**: Select Review Coordinator. Type: "Review all changes made to the frontend game detail page and the API endpoint it calls. Focus on the code in client/src/components/GameDetails.svelte and server/routes/games.py." Watch parallel execution.

> I'm asking the coordinator to review the game detail page - both the Svelte frontend and the Flask API it calls.
>
> Watch - the coordinator immediately fans out. Three delegations, happening at the same time.

**CAMTASIA ACTION**: Open Agent Sessions view to show parallel execution indicators.

> In the Agent Sessions view, you can see all three subagents active simultaneously. Security is reading auth middleware. Performance is checking query patterns. Accessibility is analyzing the Svelte component's HTML structure.
>
> They finish at different times - that's fine. The coordinator waits for all three.

**CAMTASIA ACTION**: Show the coordinator's synthesized report.

> Here's the unified report. The coordinator has merged all three perspectives into a single prioritized list. Critical: two security findings. High: one performance issue - an N+1 query in the game detail fetch. Medium: three accessibility gaps - missing ARIA labels on interactive elements.
>
> Each finding cites its source reviewer. No duplication. Clean signal.

### OUTRO (3:40-4:05)

> Parallel fan-out gives you independent, unbiased reviews that scale. Add more reviewers without slowing down - they all run at once.
>
> Compare this to A4a's sequential TDD pattern - different problems need different orchestration shapes. You now have both in your toolkit.
>
> Next up: skill creation. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A4b-parallel-review`
- [ ] All four agent files in place
- [ ] GameDetails.svelte has intentional issues:
  - Missing ARIA labels on buttons
  - No alt text on game images
- [ ] games.py has intentional issues:
  - N+1 query in detail endpoint
  - No rate limiting
- [ ] Pre-test to see parallel execution

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + fan-out diagram | 0:20 | Simple coordinator -> 3 arrows diagram |
| 2 | Review coordinator agent file | 0:30 | Zoom on "simultaneously" instruction |
| 3 | Quick flip through 3 reviewer agents | 0:50 | 15-20s each, zoom on unique instructions |
| 4 | Live demo: send prompt, fan-out begins | 0:30 | Show delegation messages |
| 5 | Agent Sessions view - parallel indicators | 0:20 | Quick peek |
| 6 | Synthesized report | 0:30 | Zoom on priority levels |
| 7 | Outro | 0:15 | Template |

### Post-Recording
- [ ] Split-screen effect showing parallel execution (optional, advanced)
- [ ] Color-code findings: red=security, orange=performance, blue=accessibility
- [ ] Speed up AI thinking (3x)
- [ ] Callout on "simultaneously" in instructions
- [ ] Zoom on prioritized findings

---

## Demo Repo Branch Spec

### Starting State (`video/A4b-parallel-review`)
```
- .github/agents/review-coordinator.agent.md
- .github/agents/security-reviewer.agent.md
- .github/agents/performance-reviewer.agent.md
- .github/agents/accessibility-reviewer.agent.md
- client/src/components/GameDetails.svelte (with a11y issues)
- server/routes/games.py (with N+1 query + no rate limiting)
```

### Ending State (`video/A4b-complete`)
```
Same as starting state (this is a review - no code changes made)
The value is the report generated in chat.
Optionally: save the report as .github/reviews/game-detail-review.md
```
