# G3 - Agentic Code Review: From Review Comments to Batch Autofixes

> **Series**: Latest 2026 Features
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G3-agentic-review`
> **Complete Branch**: `video/G3-complete`

---

## Overview

**What viewers learn**: How Copilot's agentic code review gathers broad repo context, delivers higher-quality findings, clusters similar comments, and applies batch autofixes.

**Prerequisites**: General PR/code review familiarity.

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro - 10s]

> Copilot code review used to scan the diff in isolation. Now it runs on an agentic architecture - it gathers repo context, understands your architecture, and delivers findings that actually matter. Plus it can fix entire classes of issues at once.

### SECTION 1: How Agentic Review Works (0:25-1:00)

**CAMTASIA ACTION**: Show a diagram: PR diff -> Agent gathers context (repo structure, related files, patterns) -> Analysis -> Findings.

> When you request a Copilot review, the agent doesn't just look at the diff. It uses tool calls to explore the repo - reads related files, checks directory structure, understands cross-file dependencies.
>
> This context-gathering step is what makes the findings architectural, not superficial. It knows if your change breaks a pattern used elsewhere in the codebase.

### SECTION 2: Trigger a Review (1:00-1:45)

**CAMTASIA ACTION**: On a PR on GitHub, request a Copilot review. Show it working - context gathering, then delivering findings.

> I request a Copilot review on this PR that adds a new feature. Watch the review process - it's exploring the repo, reading related endpoint patterns, checking test conventions.
>
> The findings come in with context. "This endpoint doesn't follow the pagination pattern used by every other endpoint in the project." It found that by reading the other endpoints, not just the diff.

### SECTION 3: Comment Clustering + Batch Autofix (1:45-3:00)

**CAMTASIA ACTION**: Show clustered review comments. Then show the batch autofix option.

> Notice the comments are clustered. Instead of five separate comments saying "missing type hint on this parameter," it's one comment: "5 functions are missing type hints" with all locations listed. Less noise, same signal.
>
> And here's the real power - batch autofix. I click "Fix all" on this cluster, and Copilot generates a single commit that fixes all five instances. Not five separate fixes - one coherent change.
>
> It works for logic issues too. "Three endpoints have inconsistent error handling" - batch autofix standardizes all three in one commit.

### SECTION 4: The Results (3:00-3:25)

**CAMTASIA ACTION**: Stats overlay.

> The agentic architecture drove an 8.1% increase in positive feedback on review comments. Teams report less noise and more actionable findings. And the batch autofix means you spend less time on mechanical fixes.

### SECTION 5: Customization (3:25-3:45)

**CAMTASIA ACTION**: Show review running on GitHub Actions. Show config options.

> The review runs on GitHub Actions using free minutes. You can configure the validation tools in repository settings - which checks to run, which to skip, severity thresholds.

### OUTRO (3:45-3:55)

> Agentic code review: context-aware findings, clustered comments, batch autofixes. It reviews like someone who actually knows your codebase.
>
> Next: Autopilot mode with integrated browser debugging. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] A PR with multiple issues for review:
  - Missing type hints (5+ instances)
  - Inconsistent error handling (3+ instances)
  - One architectural issue
- [ ] Copilot code review enabled on the repo
- [ ] GitHub Actions minutes available

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + diagram | 0:25 | Overlay |
| 2 | Trigger review, show context gathering | 0:45 | Speed up processing |
| 3 | Show clustered comments | 0:30 | Zoom on cluster |
| 4 | Batch autofix demo | 0:45 | Show one-click fix |
| 5 | Stats overlay | 0:25 | Quick |
| 6 | Config in repo settings | 0:20 | Quick |
| 7 | Outro | 0:10 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G3-agentic-review`)
```
- PR branch with intentional issues:
  - 5+ missing type hints
  - 3+ inconsistent error handlers
  - 1 architectural pattern violation
```

### Ending State (`video/G3-complete`)
```
- Review comments visible on the PR
- Batch autofix commit applied
```
