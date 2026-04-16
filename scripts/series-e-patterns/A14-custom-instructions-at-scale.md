# A14 - Custom Instructions Architecture at Scale

> **Series**: Real-World Patterns
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A14-instructions-scale`
> **Complete Branch**: `video/A14-complete`

---

## Overview

**What viewers learn**: How to layer workspace instructions, agent personas, skill instructions, prompt files, and monorepo discovery into a coherent team-wide instruction architecture.

**Prerequisites**: A1 (agents), A5 (skills), general customization familiarity.

**Key files touched**:
- `.github/copilot-instructions.md`
- `.github/instructions/*.instructions.md`
- `.github/agents/*.agent.md`
- `.github/skills/*/SKILL.md`
- `.github/prompts/*.prompt.md`
- `AGENTS.md` / `CLAUDE.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title + layer diagram | Stack: workspace -> agent -> skill -> prompt | "Instructions layer. Understanding the stack is critical." |
| 3 | 0:30-1:10 | Editor: copilot-instructions.md | Workspace-level always-on instructions | "The foundation: always-on workspace instructions." |
| 4 | 1:10-1:40 | Editor: instruction files | Show targeted instruction files | "Targeted instructions for specific contexts." |
| 5 | 1:40-2:05 | Diagram: how layers combine | Overlay showing what loads when | "When you use an agent, these all combine." |
| 6 | 2:05-2:30 | Editor: prompt files | Show reusable prompt templates | "Prompt files are reusable task templates." |
| 7 | 2:30-2:55 | Editor: AGENTS.md | Show repo-level agent instructions | "AGENTS.md works across Copilot, Claude, and CLI." |
| 8 | 2:55-3:25 | Monorepo discovery | Show how instructions cascade in a monorepo | "In a monorepo, discovery cascades across packages." |
| 9 | 3:25-3:45 | Agent Debug Panel | Verify which instructions loaded | "Always verify with the debug panel." |
| 10 | 3:45-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> One agent, one instruction file is simple. But a real team has workspace conventions, agent-specific personas, targeted instruction files, reusable prompts, and skills - all of which combine at runtime. Understanding how these layers work together is the difference between a messy setup and a scalable architecture.

### SECTION 1: The Instruction Stack (0:30-1:40)

**CAMTASIA ACTION**: Open `.github/copilot-instructions.md`. Zoom into the content.

> Layer one: `copilot-instructions.md`. This loads on every chat request in this workspace. It's your team's baseline - code standards, required patterns, things every agent should know. Keep it focused and concise.

**CAMTASIA ACTION**: Open `.github/instructions/flask-endpoint.instructions.md`.

> Layer two: targeted instruction files. These activate based on file context. When I'm working in a Python file and this instruction says `applyTo: "**/*.py"`, it loads automatically. Flask conventions, SQLAlchemy patterns, test requirements - but only when relevant.

### SECTION 2: Prompt Files and AGENTS.md (2:05-2:55)

**CAMTASIA ACTION**: Open a prompt file. Show the structure.

> Prompt files are different - they're reusable task templates you invoke explicitly. This one is `add-endpoint.prompt.md`. It defines a structured prompt: "Generate a new Flask endpoint following our patterns. Include model, route, blueprint registration, and tests."
>
> You run it in chat like a slash command. It's the task definition, while instructions are the behavioral guidelines.

**CAMTASIA ACTION**: Open AGENTS.md at repo root.

> Then there's `AGENTS.md` at the repo root. This is the cross-tool layer - it works across Copilot, Claude Code, and Copilot CLI. Think of it as the universal instruction file. Good for CI/CD conventions, branching strategy, and deployment patterns that every AI tool should follow.

### SECTION 3: Monorepo and Verification (2:55-3:45)

**CAMTASIA ACTION**: Show a monorepo structure with packages/api and packages/web, each with their own instructions. Show discovery settings.

> In a monorepo, discovery cascades. The root `copilot-instructions.md` applies everywhere. Each package can have its own instruction files and skills. When you're working in `packages/api`, you get the root instructions plus the API-specific ones. Working in `packages/web`, you get root plus web-specific.
>
> Enable monorepo discovery in settings and it all just works.

**CAMTASIA ACTION**: Open Agent Debug Panel. Show the loaded customizations list.

> And here's the validation step you should always do: open the Agent Debug Panel and check the customization events. You can see every instruction file, skill, and hook that loaded. If something unexpected loads - or something expected doesn't - you find it here.

### OUTRO (3:45-3:55)

> Instructions layer: workspace baseline, targeted context, agent persona, skill procedures, prompt templates, and cross-tool AGENTS.md. Understand the stack, verify with the debug panel.
>
> That wraps the patterns series. Next: Copilot CLI. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A14-instructions-scale`
- [ ] All instruction layers in place
- [ ] Multiple instruction files in .github/instructions/
- [ ] At least one prompt file in .github/prompts/
- [ ] AGENTS.md at repo root
- [ ] Optional: monorepo-style nested structure for the demo

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + layer diagram | 0:20 | Layered stack graphic |
| 2 | copilot-instructions.md | 0:30 | Zoom on key content |
| 3 | Targeted instruction file | 0:30 | Show applyTo pattern |
| 4 | Layer combination diagram | 0:25 | Animated overlay |
| 5 | Prompt file walkthrough | 0:25 | Show structure |
| 6 | AGENTS.md | 0:20 | Quick, emphasize cross-tool |
| 7 | Monorepo discovery | 0:30 | Show nested structure |
| 8 | Debug panel verification | 0:20 | Show loaded customizations |
| 9 | Outro | 0:10 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A14-instructions-scale`)
```
- .github/copilot-instructions.md (workspace baseline)
- .github/instructions/flask-endpoint.instructions.md
- .github/instructions/svelte.instructions.md
- .github/instructions/python-tests.instructions.md
- .github/prompts/add-endpoint.prompt.md
- .github/prompts/code-review.prompt.md
- .github/agents/ (various agents from prior videos)
- .github/skills/ (skills from prior videos)
- AGENTS.md (cross-tool instructions)
- CLAUDE.md (Claude-specific instructions)
```

### Ending State (`video/A14-complete`)
```
Same as starting state (this is an architecture overview)
```
