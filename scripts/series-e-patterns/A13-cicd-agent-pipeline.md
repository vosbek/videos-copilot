# A13 - Building a Full CI/CD Agent Pipeline

> **Series**: Real-World Patterns
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A13-cicd-pipeline`
> **Complete Branch**: `video/A13-complete`

---

## Overview

**What viewers learn**: How to combine custom agents, skills, hooks, and MCP servers into a complete CI/CD pipeline agent that reads PRs, runs tests, checks security, and generates reviews.

**Prerequisites**: A2 (subagents), A5 (skills), A7 (hooks), A11 (MCP)

**Key files touched**:
- `.github/agents/ci-pipeline.agent.md`
- `.github/agents/test-runner.agent.md`
- `.github/agents/security-scanner.agent.md`
- `.github/agents/review-writer.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:35 | Title + pipeline diagram | PR -> Test -> Security -> Review | "Everything we've built, working together." |
| 3 | 0:35-1:15 | Editor: ci-pipeline.agent.md | Coordinator with 3 subagents + hooks + MCP | "The CI agent coordinates tests, security, and review." |
| 4 | 1:15-1:40 | Editor: test-runner agent | Show test execution subagent | "Test runner has terminal access and reads coverage." |
| 5 | 1:40-2:05 | Editor: security-scanner agent | Show security subagent with MCP tools | "Security scanner uses CodeQL MCP + custom skill." |
| 6 | 2:05-2:25 | Editor: review-writer agent | Show review generation agent | "Review writer synthesizes into a PR comment." |
| 7 | 2:25-3:50 | Chat: full pipeline demo | Run on a real PR branch with changes | "Point it at a PR and watch the pipeline." |
| 8 | 3:50-4:20 | Flow chart view | Visualize the full pipeline | "The complete pipeline in one view." |
| 9 | 4:20-4:40 | Agent Debug Panel | Show hooks firing during pipeline | "Hooks enforcing guardrails throughout." |
| 10 | 4:40-4:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:35)

[Branded intro - 10s]

> Over this series, we've built agents, skills, hooks, and MCP integrations separately. Now let's combine them into something real: a CI/CD pipeline agent that takes a PR, runs tests, scans for security issues, and generates a structured review.
>
> This is everything working together.

### SECTION 1: The Architecture (0:35-2:25)

**CAMTASIA ACTION**: Open `ci-pipeline.agent.md`. Zoom into the full configuration.

> The CI pipeline agent is a coordinator with three subagents. Its instructions: "For any PR, run the test suite, scan for security vulnerabilities, then generate a review. Fail fast - if tests fail, report immediately without scanning."
>
> It references hooks for guardrails - the lint hook ensures any suggested fixes are formatted, and the block hook prevents touching CI config files. And it has MCP tools for accessing GitHub PR data.

**CAMTASIA ACTION**: Quick walkthrough of each subagent (15-20 seconds each).

> The test runner has `runTerminal` to execute pytest and read coverage reports. The security scanner uses the CodeQL MCP server plus our custom security audit skill. The review writer is read-only - it takes the test and security reports and writes a structured PR review.

### SECTION 2: Live Demo (2:25-3:50)

**CAMTASIA ACTION**: Check out a branch with some changes (a new feature with a bug and a security issue). Ask the CI pipeline agent to review this branch.

> I have a branch with a new feature - let's point the pipeline at it.
>
> "Review the changes on branch feature/user-profiles for CI readiness."
>
> The coordinator starts. First, it delegates to the test runner. Tests execute... two failures. But it doesn't stop for security yet - it notes the failures and delegates to the security scanner to run in parallel.
>
> Security scanner is using CodeQL through MCP - it found an unparameterized SQL query. And our security audit skill flagged missing input sanitization.
>
> Now the review writer takes both reports and generates a structured review: two test failures with reproduction steps, one critical security finding with a fix suggestion, and an overall verdict: "Not ready to merge. Two blockers."

### SECTION 3: Visualization (3:50-4:40)

**CAMTASIA ACTION**: Open Flow Chart view. Show the full pipeline graph. Then open Debug Panel to show hooks firing.

> Open the flow chart and you see the complete pipeline. Coordinator at top, test runner and security scanner branching off, review writer at the bottom synthesizing results.
>
> And in the debug panel - watch the hooks firing. The lint hook ran after the review writer suggested code fixes. The block hook prevented a suggestion that would have modified the CI workflow file. Guardrails working inside the pipeline.

### OUTRO (4:40-4:55)

> Agents, subagents, skills, hooks, MCP - all composable, all working together. This is the pattern for building real developer tooling with AI.
>
> Next: scaling your instruction architecture. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A13-cicd-pipeline`
- [ ] Feature branch exists with intentional issues:
  - 2 test failures
  - 1 SQL injection vulnerability
  - 1 missing input validation
- [ ] All four agent files configured
- [ ] CodeQL MCP server running
- [ ] Hooks in place and executable
- [ ] Pre-run the full pipeline once to know timing

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + pipeline diagram | 0:25 | Use a 4-stage pipeline graphic |
| 2 | Walk through ci-pipeline.agent.md | 0:40 | Zoom on subagents + hooks + MCP |
| 3 | Quick flip through 3 subagents | 0:45 | 15s each |
| 4 | Live demo: full pipeline execution | 1:25 | Speed up heavily |
| 5 | Flow chart visualization | 0:30 | Pan through the graph |
| 6 | Debug panel: hooks firing | 0:20 | Quick zoom |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A13-cicd-pipeline`)
```
- .github/agents/ci-pipeline.agent.md (coordinator)
- .github/agents/test-runner.agent.md
- .github/agents/security-scanner.agent.md
- .github/agents/review-writer.agent.md
- .github/skills/security-audit/SKILL.md
- .github/hooks/ (lint + block hooks)
- .vscode/mcp.json (CodeQL + GitHub MCP)
- feature/user-profiles branch with intentional issues
```

### Ending State (`video/A13-complete`)
```
Same as starting state (pipeline generates a review, doesn't fix code)
Optionally: review output saved to .github/reviews/
```
