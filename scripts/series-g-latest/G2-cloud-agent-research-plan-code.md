# G2 - Copilot Cloud Agent: Research, Plan, and Code

> **Series**: Latest 2026 Features
> **Length**: 4.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G2-cloud-agent`
> **Complete Branch**: `video/G2-complete`

---

## Overview

**What viewers learn**: The cloud agent's expanded capabilities beyond PRs - research mode for codebase Q&A, plan mode for reviewed implementation plans, branch-without-PR workflows, and 3-click merge conflict resolution.

**Prerequisites**: General Copilot familiarity.

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card | "Research. Plan. Code." | "The cloud agent isn't just for PRs anymore." |
| 3 | 0:30-1:15 | GitHub.com: research mode | Ask a codebase question, get grounded answer | "Research mode: interrogate your codebase." |
| 4 | 1:15-2:00 | GitHub.com: plan mode | Request a plan, review before any code | "Plan mode: review the approach first." |
| 5 | 2:00-2:35 | GitHub.com: code on branch | Work on a branch without creating a PR | "Code on a branch. Open a PR when you're ready." |
| 6 | 2:35-3:10 | GitHub.com: merge conflict fix | Show "Fix with Copilot" on a conflicted PR | "Three clicks to fix merge conflicts." |
| 7 | 3:10-3:40 | GitHub Mobile | Show the same features on mobile | "All of this works on mobile too." |
| 8 | 3:40-4:10 | Cloud agent custom agents | Show custom agents in cloud agent context | "Your custom agents work in the cloud." |
| 9 | 4:10-4:25 | Outro | Summary | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> The Copilot cloud agent started as a PR machine - you'd assign it an issue and it'd open a pull request. That was just the beginning. Now it's a research tool, a planner, and a flexible coding assistant that doesn't force you into the PR workflow.

### SECTION 1: Research Mode (0:30-1:15)

**CAMTASIA ACTION**: On GitHub.com, open Copilot chat in the repo. Type: "How does the authentication flow work in this repo? Trace the request from login to token validation, including all middleware involved." Show the grounded answer with file references.

> Research mode lets you interrogate your codebase. I'm asking a broad question about the authentication flow. The cloud agent doesn't guess - it searches the repo, reads the relevant files, and builds an answer grounded in your actual code.
>
> See the file references - it's citing specific lines in specific files. This is codebase-aware research, not generic AI answers. Great for onboarding, architecture review, or understanding unfamiliar code.

### SECTION 2: Plan Mode (1:15-2:00)

**CAMTASIA ACTION**: Type: "Plan how to add WebSocket support for real-time game funding updates." Show Copilot generating a plan. Review it. Provide feedback.

> Now plan mode. I ask for WebSocket support and instead of diving into code, Copilot generates an implementation plan first.
>
> It proposes: add a WebSocket server layer, create a funding events broadcaster, update the frontend to subscribe, add reconnection logic. Each step has estimated complexity and affected files.
>
> I can approve, revise, or reject before any code is written. "Skip the reconnection logic for now, focus on the core flow." It adjusts the plan and awaits my go-ahead.

### SECTION 3: Code on Branch (2:00-2:35)

**CAMTASIA ACTION**: Approve the plan. Show Copilot working on a branch without creating a PR.

> Once I approve, it starts coding on a branch. But notice - no PR yet. The cloud agent now supports working on a branch without forcing a pull request. I can iterate, check the changes, and open a PR when I'm actually ready.
>
> This flexibility is huge for exploratory work. Let it code, review the result, decide if it's worth a PR.

### SECTION 4: Merge Conflict Resolution (2:35-3:10)

**CAMTASIA ACTION**: Navigate to a PR with merge conflicts on GitHub.com. Show the "Fix with Copilot" button. Click it. Show the resolution.

> Merge conflicts. Every developer's favorite thing. Now there's a "Fix with Copilot" button right on the PR page.
>
> Three clicks: click the button, it pre-populates a comment asking Copilot to resolve the conflicts, submit. The cloud agent checks out the branch, resolves conflicts intelligently, verifies tests still pass, and pushes.
>
> No more manual conflict resolution for straightforward merges.

### SECTION 5: Mobile and Custom Agents (3:10-4:10)

**CAMTASIA ACTION**: Show GitHub Mobile with the same research and plan features. Then show custom agents being used in cloud agent context.

> All of this works on GitHub Mobile too. Research your codebase from your phone. Review a plan on your commute. Kick off a coding task from anywhere.
>
> And your custom agents - the ones we built in `.agent.md` files - they work in the cloud agent context. The cloud agent discovers them the same way VS Code and CLI do.

### OUTRO (4:10-4:25)

> Research, plan, code, resolve conflicts - all from GitHub.com or your phone. The cloud agent is becoming the universal Copilot surface.
>
> Next: Agentic Code Review. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] GitHub.com access with Copilot cloud agent enabled
- [ ] Tailspin Toys repo on GitHub with cloud agent configured
- [ ] A PR with merge conflicts prepared
- [ ] GitHub Mobile installed and logged in
- [ ] Custom agents in the repo

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro | 0:20 | Template |
| 2 | Research mode on GitHub.com | 0:45 | Show grounded answer |
| 3 | Plan mode + review cycle | 0:45 | Show plan + feedback |
| 4 | Code on branch (no PR) | 0:35 | Show branch work |
| 5 | Fix merge conflict (3 clicks) | 0:35 | Show the button + resolution |
| 6 | GitHub Mobile features | 0:30 | Quick screen recording |
| 7 | Custom agents in cloud | 0:20 | Quick demo |
| 8 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G2-cloud-agent`)
```
- Tailspin Toys on GitHub with cloud agent enabled
- Custom agents in .github/agents/
- A branch with merge conflicts prepared
```

### Ending State (`video/G2-complete`)
```
- New branch with WebSocket implementation (from plan mode demo)
- Merge conflicts resolved on the prepared PR
```
