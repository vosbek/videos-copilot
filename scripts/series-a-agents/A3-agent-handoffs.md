# A3 - Agent Handoffs: Building Sequential Workflows

> **Series**: Agents & Orchestration
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A3-agent-handoffs`
> **Complete Branch**: `video/A3-complete`

---

## Overview

**What viewers learn**: How to configure handoff buttons between agents to create guided sequential workflows with context passing and auto-submission.

**Prerequisites**: A1 (custom agents), A2 (subagents)

**Key files touched**:
- `.github/agents/planner.agent.md`
- `.github/agents/implementer.agent.md`
- `.github/agents/reviewer.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + flow diagram | Plan -> Implement -> Review chain | "Handoffs create one-click transitions between agents." |
| 3 | 0:30-1:10 | Editor: planner.agent.md | Show handoffs config in frontmatter | "The planner hands off to the implementer with a pre-filled prompt." |
| 4 | 1:10-1:40 | Editor: implementer handoff | Show handoff to reviewer | "The implementer passes to the reviewer when done." |
| 5 | 1:40-2:00 | Editor: send: true | Highlight auto-submission flag | "send: true means it fires automatically - no extra click." |
| 6 | 2:00-3:30 | Chat: live demo | Start with planner, flow through all three | "Watch the entire chain flow from plan to implementation to review." |
| 7 | 3:30-3:50 | Recap | Summary of handoff pattern | "Sequential workflows, context preserved, one-click transitions." |
| 8 | 3:50-4:00 | Outro | Branch link + next video | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Subagents run inside a coordinator. But sometimes you want a different pattern - a sequential workflow where you hand off from one agent to the next, with you in the loop at each step.
>
> Handoffs create guided workflows with one-click transitions. Think: plan, then implement, then review - each as a discrete step you can observe and steer.

### SECTION 1: Configuring Handoffs (0:30-1:40)

**CAMTASIA ACTION**: Open `.github/agents/planner.agent.md`. Zoom into the `handoffs` section in frontmatter.

> Here's our planner agent. Down in the frontmatter, there's a `handoffs` section. Each handoff defines a target agent and a prompt template.
>
> This one says: target is `implementer`, the button label is "Implement this plan", and the prompt template passes the plan context forward: "Implement the following plan: {{response}}."
>
> The double-brace `response` variable captures what the planner just said and feeds it into the next agent's prompt.

**CAMTASIA ACTION**: Open `.github/agents/implementer.agent.md`. Show its handoff to reviewer.

> The implementer has its own handoff - to the reviewer. Same pattern: target `reviewer`, prompt "Review the following implementation: {{response}}."
>
> And here's a powerful flag - `send: true`. When this is set, the handoff doesn't just pre-fill the prompt and wait. It auto-submits. The moment the implementer finishes, the review kicks off automatically.

### SECTION 2: Live Demo (2:00-3:30)

**CAMTASIA ACTION**: Select the Planner agent. Type: "Plan how to add user authentication with JWT tokens and role-based access control to the Tailspin Toys API." Watch the planner produce a plan. Click the "Implement this plan" handoff button. Watch the implementer work. Watch auto-handoff to reviewer.

> Let's see the full chain. I'm asking the planner to design JWT authentication with role-based access for our API.
>
> The planner explores the codebase, understands the current structure, and produces a detailed plan - which models to add, which routes to modify, what middleware to create.
>
> Now look at the bottom of the response - there's the handoff button: "Implement this plan." One click.
>
> We're now in the implementer agent. Notice the prompt was pre-filled with the entire plan. The implementer starts building - user model, auth middleware, route decorators, tests.
>
> And watch - when the implementer finishes, the handoff to the reviewer fires automatically because of `send: true`. No button click needed.
>
> The reviewer reads all the new code, checks it against the plan, and delivers its verdict.
>
> Three agents. Three steps. One seamless flow.

### OUTRO (3:30-4:00)

> Handoffs give you sequential workflows with context preserved at each step. Use them when you want visibility into each stage, with the option to intervene between steps.
>
> Contrast with subagents from the last video - those run silently inside a coordinator. Handoffs keep you in the driver's seat.
>
> Next: TDD with subagent orchestration. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A3-agent-handoffs`
- [ ] Verify all three agent files have handoff configs
- [ ] Pre-test the flow to know timing (AI response time)
- [ ] Have the app running for the implementer to actually create files

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + flow diagram | 0:30 | Use a simple 3-box arrow diagram |
| 2 | Walk through planner.agent.md handoffs config | 0:40 | Zoom on handoffs YAML |
| 3 | Walk through implementer handoff + send:true | 0:30 | Highlight the flag |
| 4 | Live demo: planner produces plan | 0:30 | Speed up thinking time |
| 5 | Click handoff button, implementer works | 0:30 | Callout on the button |
| 6 | Auto-handoff to reviewer + results | 0:20 | Zoom on auto-submit |
| 7 | Recap + outro | 0:20 | Template |

### Post-Recording
- [ ] Callout annotation on handoff button (make it very visible)
- [ ] Callout on `send: true` line
- [ ] Speed up AI processing (2-4x)
- [ ] Lower thirds: "Planner", "Implementer", "Reviewer" as each activates
- [ ] Add a flow diagram overlay during transitions

---

## Demo Repo Branch Spec

### Starting State (`video/A3-agent-handoffs`)
```
- .github/agents/planner.agent.md (read-only, handoff to implementer)
- .github/agents/implementer.agent.md (edit access, handoff to reviewer with send:true)
- .github/agents/reviewer.agent.md (read-only, no handoff - end of chain)
- Full Tailspin Toys app with NO auth (that's what we're adding)
```

### Ending State (`video/A3-complete`)
```
All starting state PLUS:
- server/models/user.py
- server/middleware/auth.py
- server/middleware/roles.py
- Updated routes with @auth_required decorators
- server/tests/test_auth.py
```
