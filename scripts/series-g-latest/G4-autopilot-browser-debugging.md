# G4 - Autopilot Mode + Integrated Browser Debugging

> **Series**: Latest 2026 Features
> **Length**: 4.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G4-autopilot-browser`
> **Complete Branch**: `video/G4-complete`

---

## Overview

**What viewers learn**: VS Code Autopilot for fully autonomous agent sessions, integrated browser debugging with breakpoints/inspection, and agents that can drive a browser to verify their own changes visually.

**Prerequisites**: Agent mode familiarity.

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> What if you gave the agent a UI bug and it found it, fixed it, and visually verified the fix - all without you touching the keyboard? Autopilot mode plus integrated browser debugging makes this possible.

### SECTION 1: Autopilot Mode (0:30-1:30)

**CAMTASIA ACTION**: In VS Code chat, toggle Autopilot mode from the chat input area. Show the auto-approve toggle.

> Autopilot mode is in public preview. Toggle it from the chat input area - you'll see the auto-approve indicator. In autopilot, the agent approves its own tool calls, automatically retries on errors, and works until it decides the task is complete.
>
> This is different from Copilot CLI's autopilot - here it's integrated with the full VS Code environment, including the browser.

**CAMTASIA ACTION**: Give a complex task: "The game detail page crashes when a game has no publisher assigned. Fix the null reference error and add proper empty state handling." Let autopilot run.

> I'm reporting a bug: null reference crash on the game detail page. In autopilot, the agent starts investigating immediately. It reads the component, identifies the null access, fixes the conditional rendering, and runs the frontend build to verify.

### SECTION 2: Integrated Browser Debugging (1:30-2:30)

**CAMTASIA ACTION**: Show the integrated browser inside VS Code. Set a breakpoint in the Svelte component. Agent triggers the browser navigation. Show the debugger hitting the breakpoint.

> Now for the integrated browser. VS Code can run a browser instance right inside the editor. You can set breakpoints in your frontend code and step through execution.
>
> I set a breakpoint in the GameDetails component. When the page loads, the debugger pauses. I can inspect variables - and there's the null publisher reference. Step through the fix, verify the value is now handled.

### SECTION 3: Agents Driving the Browser (2:30-3:40)

**CAMTASIA ACTION**: Show the agent using the browser tool - navigating, clicking, taking screenshots. Show it verifying its own fix.

> Here's where it gets powerful. Agents can drive the integrated browser as an `/experimental` feature. The agent can navigate to URLs, click elements, take screenshots, and verify changes visually.
>
> Watch - after fixing the null reference, the agent navigates to a game without a publisher. It takes a screenshot showing the empty state renders correctly. Then it navigates to a game with a publisher and takes another screenshot confirming that still works.
>
> The agent verified its own fix visually. It didn't just pass tests - it saw the result.

### SECTION 4: Image Support in Chat (3:40-4:10)

**CAMTASIA ACTION**: Show the agent returning images in the chat - screenshots of before/after.

> The screenshots appear right in the chat conversation. You can see a before/after carousel. The agent can also accept images from you - paste a screenshot of a bug and say "fix this."
>
> This closes the loop between code changes and visual verification.

### OUTRO (4:10-4:25)

> Autopilot for autonomous execution. Integrated browser for debugging and verification. Agents that see their own changes. This is what full-stack agent development looks like.
>
> Next: Rubber Duck cross-model review. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/G4-autopilot-browser`
- [ ] VS Code with Autopilot preview enabled
- [ ] Integrated browser configured
- [ ] A game in the database with no publisher (to trigger the null bug)
- [ ] Frontend running on localhost
- [ ] /experimental features enabled for browser driving

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro | 0:20 | Template |
| 2 | Toggle autopilot, give the bug | 0:30 | Show auto-approve toggle |
| 3 | Autopilot investigating and fixing | 0:30 | Speed up 3x |
| 4 | Set breakpoint, browser hits it | 0:30 | Zoom on breakpoint + variables |
| 5 | Agent driving browser - navigate + screenshot | 0:40 | Speed up navigation |
| 6 | Before/after screenshots in chat | 0:30 | Show the carousel |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G4-autopilot-browser`)
```
- Full Tailspin Toys app with frontend
- At least one game with null publisher (triggers the bug)
- GameDetails.svelte with the null reference (not yet fixed)
```

### Ending State (`video/G4-autopilot-browser-complete`)
```
- GameDetails.svelte (fixed null reference + empty state)
- Screenshots captured in chat (not persisted as files)
```
