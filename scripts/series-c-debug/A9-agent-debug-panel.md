# A9 - Agent Debug Panel: X-Ray Vision for Agent Sessions

> **Series**: Debugging & Visibility
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A9-debug-panel`
> **Complete Branch**: `video/A9-complete`

---

## Overview

**What viewers learn**: How to use the Agent Debug Panel to see real-time events - system prompts, tool calls, customization loading - and diagnose issues like skills not triggering or tool call failures.

**Prerequisites**: Any prior video (uses agents/skills from earlier)

**Key files touched**: None (observing existing setup)

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:25 | Title card | "X-Ray Vision for Agents" | "See everything the agent sees - in real time." |
| 3 | 0:25-0:50 | VS Code: open debug panel | Chat view > ... > Show Agent Debug Logs | "Three clicks to open the most powerful debugging tool you have." |
| 4 | 0:50-1:30 | Debug panel: event stream | Walk through event types | "Every event type and what it tells you." |
| 5 | 1:30-2:10 | Debug panel: customization events | Show what loaded (skills, prompts, hooks) | "Exactly which customizations loaded for this session." |
| 6 | 2:10-2:50 | Debug panel: tool calls | Expand a tool call to see request/response | "Every tool call, its inputs, and its outputs." |
| 7 | 2:50-3:20 | Debugging: skill not triggering | Diagnose why a skill doesn't load | "Real scenario: why isn't my skill loading?" |
| 8 | 3:20-3:45 | Debugging: tool call failure | Find and diagnose a failed tool call | "Something failed. Here's exactly where." |
| 9 | 3:45-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:25)

[Branded intro - 10s]

> Your agent isn't doing what you expect. Maybe a skill isn't loading. Maybe a tool call is silently failing. Maybe the wrong instructions are being applied. How do you find out?
>
> The Agent Debug Panel shows you everything.

### SECTION 1: Opening the Panel (0:25-0:50)

**CAMTASIA ACTION**: In Chat view, click the ellipsis menu (...), then "Show Agent Debug Logs." Panel opens on the right side.

> Three clicks. Chat view, ellipsis menu, "Show Agent Debug Logs." The panel opens and immediately starts streaming events from your current session.
>
> Think of this as browser DevTools, but for your AI agent.

### SECTION 2: The Event Stream (0:50-1:30)

**CAMTASIA ACTION**: Trigger a prompt that uses agents and skills. Scroll through events in the debug panel. Zoom into different event types.

> Let me trigger a prompt so we can see events flow. I'll ask the agent to generate a new API endpoint - this should trigger our skill from earlier.
>
> Watch the panel. You see events streaming in real time. There are several types: `system_prompt` shows the full system prompt sent to the model. `tool_call` shows each tool the agent invoked. `customization_loaded` tells you which skills, prompts, hooks, and instructions were loaded. `model_response` shows what the model returned.

### SECTION 3: Customization Events (1:30-2:10)

**CAMTASIA ACTION**: Filter/scroll to customization events. Zoom in to show each loaded customization.

> The customization events are gold for debugging. Expand this one - it lists every customization loaded for this session.
>
> I can see: `copilot-instructions.md` was loaded. The `api-endpoint-generator` skill was loaded - good, that's what we wanted. The `lint-on-edit` hook is registered on `postToolUse`. The `block-protected` hook is registered on `preToolUse`.
>
> If something is missing from this list, it wasn't loaded. That tells you exactly where to look - the file might be in the wrong location, the description might not match, or the frontmatter might have a syntax error.

### SECTION 4: Tool Calls (2:10-2:50)

**CAMTASIA ACTION**: Find a tool call event. Expand it to show the full request and response.

> Every tool call is logged with full detail. Here's a `readFile` call - I can see the exact file path it requested and the content it received back. Here's an `editFile` call - the exact diff it applied.
>
> This is how you debug unexpected agent behavior. If the agent edited the wrong file or read the wrong content, you'll see it right here.

### SECTION 5: Debugging Scenarios (2:50-3:45)

**CAMTASIA ACTION**: Scenario 1 - Show a prompt that should trigger a skill but doesn't. Open debug panel, show customization events - skill is missing. Check the SKILL.md file for the issue.

> Real scenario. I type "Create a database migration for adding a user table" - and my migration skill doesn't load. Let me check the debug panel.
>
> In the customization events... there it is - or rather, there it isn't. The migration skill doesn't appear. That means Copilot's description matching didn't find it relevant.
>
> I open the SKILL.md - the description says "Generates SQL migration files." But I said "database migration." The description is too narrow. I update it, reload, try again - now it loads.

**CAMTASIA ACTION**: Scenario 2 - Show a failed tool call in the event stream. Expand to see the error.

> Second scenario. The agent tried to run a command but something failed silently. In the debug panel, I see a `runTerminal` tool call with a non-zero exit code. Expanding it shows the error: "permission denied." The hook script wasn't executable. A `chmod +x` fixes it.

### OUTRO (3:45-3:55)

> The debug panel is your first stop when anything goes wrong. Skills not loading, tool calls failing, wrong instructions applied - it's all there in real time. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A9-debug-panel`
- [ ] Have agents, skills, hooks from previous videos in place
- [ ] Prepare a skill with a deliberately narrow description (for debugging demo)
- [ ] Prepare a hook script without execute permission (for debugging demo)
- [ ] Know where the debug panel menu item is

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:15 | Template |
| 2 | Open the debug panel (3 clicks) | 0:25 | Zoom on menu location |
| 3 | Trigger a prompt, show event stream | 0:40 | Speed up AI response |
| 4 | Walk through customization events | 0:40 | Zoom on each loaded customization |
| 5 | Expand tool calls | 0:40 | Zoom on request/response |
| 6 | Debug scenario 1: skill not loading | 0:30 | Show diagnosis process |
| 7 | Debug scenario 2: tool call failure | 0:25 | Show error in event |
| 8 | Outro | 0:10 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A9-debug-panel`)
```
- All agents/skills/hooks from previous videos
- One skill with deliberately narrow description (for debugging demo)
- One hook script missing execute permission (for debugging demo)
```

### Ending State (`video/A9-complete`)
```
- Same state (debugging is observational, fixes are trivial)
```
