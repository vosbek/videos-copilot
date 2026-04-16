# G7 - Agent Security Pipeline: Self-Review + CodeQL + Secret Scanning

> **Series**: Latest 2026 Features
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G7-security-pipeline`
> **Complete Branch**: `video/G7-complete`

---

## Overview

**What viewers learn**: How the cloud agent's built-in validation pipeline works - self-review, CodeQL, secret scanning, Advisory Database checks - running in parallel, configurable per repo.

**Prerequisites**: General Copilot/GitHub familiarity.

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro - 10s]

> When the Copilot cloud agent writes code, it doesn't just commit and hope. It runs a full security validation pipeline before opening a PR: self-review, CodeQL analysis, secret scanning, and dependency checks. All in parallel. Let's see it work.

### SECTION 1: The Validation Pipeline (0:25-1:10)

**CAMTASIA ACTION**: Show a pipeline diagram: Agent writes code -> Self-review -> CodeQL -> Secret scanning -> Advisory Database -> Results. All four validators run in parallel.

> After writing code, the agent triggers four validators in parallel. Self-review: it reviews its own changes using the same agentic code review we covered in G3. CodeQL: static analysis for security vulnerabilities. Secret scanning: checks for accidentally committed API keys and tokens. Advisory Database: checks new dependencies against known vulnerabilities.
>
> They run in parallel - 20% faster than the old sequential approach. If any validator finds an issue, the agent self-corrects before the PR opens.

### SECTION 2: Live Demo - Catching Issues (1:10-2:30)

**CAMTASIA ACTION**: Assign the cloud agent an issue that involves adding a new dependency and a database query. Watch it code, then watch the validation pipeline catch issues.

> I'll assign the cloud agent an issue: "Add a feature to export game data as CSV." It needs a new dependency and a database query.
>
> The agent implements the feature. Now the validation pipeline starts. Watch - all four validators running at once.
>
> Self-review catches: the CSV export doesn't sanitize field content for formula injection. CodeQL flags: the SQL query uses string concatenation instead of parameterized queries. Secret scanning: clean, no secrets. Advisory Database: clean, the CSV library has no known vulnerabilities.
>
> The agent sees these results and self-corrects. It rewrites the SQL as a parameterized query and adds CSV content sanitization. Validation runs again - all clear. Now the PR opens.

### SECTION 3: Configuration (2:30-3:10)

**CAMTASIA ACTION**: Show Repository Settings > Copilot > Cloud Agent > Validation Tools. Toggle options.

> You configure which validators run in repository settings. Copilot > Cloud Agent > Validation Tools. Toggle CodeQL, secret scanning, or advisory checks on or off.
>
> You can also delegate CodeQL alert remediation directly to the agent. If CodeQL found an existing vulnerability in your codebase, click "Fix with Copilot" and the agent creates a remediation PR.

### SECTION 4: Self-Review in Detail (3:10-3:40)

**CAMTASIA ACTION**: Show the self-review comments on the PR before it's published.

> The self-review is particularly interesting. The agent reviews its own code using Copilot code review - the same agentic architecture that reviews human PRs. It catches things the agent itself missed during implementation.
>
> In one session at GitHub, the agent caught that its own string concatenation was overly complex and simplified it before the PR landed. The reviewer caught what the coder missed.

### OUTRO (3:40-3:55)

> Built-in security validation, running in parallel, self-correcting before the PR opens. This is the safety net for autonomous agents.
>
> Next: the capstone - how VS Code ships weekly with AI. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Cloud agent enabled on the repo
- [ ] CodeQL configured
- [ ] Create an issue for the CSV export feature
- [ ] Ensure the agent will use string concatenation (for the CodeQL catch)
- [ ] Have repo settings page ready to show

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + pipeline diagram | 0:25 | Overlay |
| 2 | Assign issue, agent implements | 0:40 | Speed up 4x |
| 3 | Validation pipeline running | 0:40 | Show parallel indicators |
| 4 | Agent self-correcting | 0:30 | Show the fix |
| 5 | Repo settings configuration | 0:40 | Show toggle options |
| 6 | Self-review comments | 0:30 | Zoom on comments |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G7-security-pipeline`)
```
- Tailspin Toys on GitHub with cloud agent + CodeQL enabled
- Issue created: "Add CSV export for game data"
- No CSV export feature exists
```

### Ending State (`video/G7-complete`)
```
- PR with CSV export feature (validated and clean)
- Self-review comments visible on the PR
```
