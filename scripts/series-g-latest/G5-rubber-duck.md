# G5 - Rubber Duck: Cross-Model Second Opinion

> **Series**: Latest 2026 Features
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G5-rubber-duck`
> **Complete Branch**: `video/G5-complete`

---

## Overview

**What viewers learn**: What Rubber Duck is, how it uses a complementary model family for independent review, when it triggers (automatically and manually), and the performance impact data.

**Prerequisites**: Copilot CLI installed.

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Every developer knows the value of a second pair of eyes. Rubber Duck is a review agent powered by a different AI model family than your primary session. If you're on Claude, Rubber Duck is GPT-5.4. If you're on GPT, it's Claude. Independent review, built right into the workflow.

### SECTION 1: How Rubber Duck Works (0:30-1:15)

**CAMTASIA ACTION**: Show a diagram: Primary agent (Claude) working -> checkpoint -> Rubber Duck (GPT-5.4) reviews -> feedback returns -> Primary continues.

> Rubber Duck isn't a second full agent. It's a focused review agent that activates at the moments where feedback has the highest return: after drafting a plan, after a complex implementation, or after writing tests before executing them.
>
> It gets a snapshot of what the primary agent did, reviews it through a completely different model's perspective, and returns a short focused list of concerns: details the primary agent may have missed, assumptions worth questioning, edge cases to consider.
>
> Crucially, it's from a different model family. Different training, different blind spots. That's what makes the review genuinely independent.

### SECTION 2: Enable and Demo (1:15-2:40)

**CAMTASIA ACTION**: In Copilot CLI, type `/experimental` to show experimental features. Enable Rubber Duck. Then start a complex task.

> Enable Rubber Duck with `/experimental` in the CLI. Now let's give it a complex multi-file task: "Implement rate limiting middleware for the API - 100 requests per minute per user, with a Redis-backed counter and proper 429 responses."

**CAMTASIA ACTION**: Show the primary agent implementing, then Rubber Duck triggering automatically after the implementation.

> The primary agent is working. It designs the middleware, implements the Redis counter, adds the route decorator.
>
> Now watch - Rubber Duck triggers automatically. It says "Reviewing implementation" and a different model analyzes the work.
>
> Rubber Duck's feedback: "The rate limit counter uses a simple increment, but this is vulnerable to race conditions under high concurrency. Consider using Redis INCR with EXPIRE in a pipeline for atomicity. Also, the 429 response doesn't include a Retry-After header, which is required by RFC 6585."
>
> Two valid catches. The race condition is subtle - easy to miss in a first pass. The missing header is a spec compliance issue.

### SECTION 3: Manual Trigger (2:40-3:10)

**CAMTASIA ACTION**: After some work, manually trigger Rubber Duck to review.

> You can also trigger Rubber Duck manually anytime. Mid-implementation, ask it to review what you have so far. It gives that independent perspective on demand.

### SECTION 4: The Numbers (3:10-3:40)

**CAMTASIA ACTION**: Stats overlay showing performance data.

> Here's why this matters. Claude Sonnet with Rubber Duck makes up 74.7% of the performance gap between Sonnet and Opus alone. You get almost Opus-level results at Sonnet cost, because the cross-model review catches what the primary model misses.
>
> It's particularly effective on difficult multi-file and long-running tasks where accumulated blind spots compound.

### OUTRO (3:40-3:55)

> Rubber Duck: independent review from a different AI perspective, at the moments that matter most. Enable it with `/experimental` and let two models be smarter than one.
>
> Next: Copilot SDK - build agents into any app. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Copilot CLI with /experimental features available
- [ ] Rubber Duck enabled
- [ ] Redis NOT required (the code just needs to compile, not run Redis)
- [ ] Prepare a complex task that will trigger auto-review

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + diagram | 0:25 | Show cross-model diagram |
| 2 | /experimental to enable Rubber Duck | 0:20 | Quick |
| 3 | Complex task implementation | 0:45 | Speed up primary agent 3x |
| 4 | Rubber Duck auto-trigger + feedback | 0:40 | Zoom on findings |
| 5 | Manual trigger | 0:30 | Quick demo |
| 6 | Stats overlay | 0:30 | Show 74.7% number |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G5-rubber-duck`)
```
- Full Tailspin Toys app
- No rate limiting (we're adding it)
- Copilot CLI with experimental features
```

### Ending State (`video/G5-complete`)
```
- server/middleware/rate_limit.py (with Rubber Duck's improvements)
- Updated routes with rate limiting applied
```
