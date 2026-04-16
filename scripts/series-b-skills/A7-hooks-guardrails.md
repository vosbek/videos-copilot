# A7 - Hooks: Enforcing Guardrails on Agent Behavior

> **Series**: Skills & Customization
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A7-hooks`
> **Complete Branch**: `video/A7-complete`

---

## Overview

**What viewers learn**: How to use hooks to enforce policies at agent lifecycle events - auto-linting after edits, blocking protected files, and auto-running tests when source changes.

**Prerequisites**: Basic agent mode familiarity.

**Key files touched**:
- `.github/hooks/hooks.json`
- `.github/hooks/lint-on-edit.sh`
- `.github/hooks/block-protected.sh`
- `.github/hooks/auto-test.sh`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title + lifecycle diagram | Show hook events on a timeline | "Hooks fire at key lifecycle moments - before and after every tool call." |
| 3 | 0:30-1:10 | Editor: hooks.json | Walk through the hook definitions | "Three hooks, three guardrails." |
| 4 | 1:10-1:40 | Editor: lint-on-edit.sh | Show the linting script | "PostToolUse: auto-format after every edit." |
| 5 | 1:40-2:10 | Editor: block-protected.sh | Show the blocking script | "PreToolUse: deny changes to protected files." |
| 6 | 2:10-2:35 | Editor: auto-test.sh | Show the test runner | "PostToolUse: run tests when source files change." |
| 7 | 2:35-3:20 | Chat: demo lint hook | Agent edits a file, lint fires automatically | "Watch: edit happens, linter runs, code is clean." |
| 8 | 3:20-3:40 | Chat: demo block hook | Agent tries to edit .env, gets blocked | "Now watch it try to touch a protected file." |
| 9 | 3:40-3:55 | Recap + outro | Summary | "Guardrails your team can trust." |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Agents are powerful, but power without guardrails is risky. What if the agent reformats your code in a non-standard way? Modifies a config file it shouldn't touch? Breaks tests without noticing?
>
> Hooks solve this. They're shell commands that fire at key agent lifecycle events - deterministic, enforceable, team-wide.

### SECTION 1: hooks.json Structure (0:30-1:10)

**CAMTASIA ACTION**: Open `.github/hooks/hooks.json`. Zoom into the structure.

> This is `hooks.json`. Each hook has an event - when it fires, a pattern - which tool calls it watches, and a command - what it runs.
>
> We have three hooks. First, a `postToolUse` hook that watches for `editFile` events - it runs our linter after every edit. Second, a `preToolUse` hook on `editFile` and `createFile` - it checks if the target file is protected and blocks the call. Third, another `postToolUse` that watches for source file changes and runs the test suite.
>
> Pre hooks can deny the tool call entirely. Post hooks can validate or transform the result.

### SECTION 2: The Scripts (1:10-2:35)

**CAMTASIA ACTION**: Open `lint-on-edit.sh`. Show the script.

> The linting hook is simple. It receives the file path that was edited, runs `black` for Python files or `prettier` for JavaScript, and reports back. If the formatter changes anything, the agent sees the formatted result.

**CAMTASIA ACTION**: Open `block-protected.sh`. Show the script.

> The blocking hook is a `preToolUse` guard. It checks the target file path against a list - `.env`, `docker-compose.yml`, `copilot-instructions.md`, anything in `.github/hooks/`. If the file is protected, it exits with a non-zero code and a message: "This file is protected by team policy."
>
> The agent sees the denial and adjusts its approach. It doesn't retry - it works around the constraint.

**CAMTASIA ACTION**: Open `auto-test.sh`. Show the script.

> The auto-test hook runs after any edit to files in `server/`. It executes `pytest` and if any test fails, the output goes straight back to the agent so it can self-correct.

### SECTION 3: Live Demo (2:35-3:40)

**CAMTASIA ACTION**: Ask agent to "Add input validation to the games route - validate that game title is between 3 and 100 characters." Watch the linting hook fire after each edit. Show the formatted code.

> Let's see it work. I'm asking the agent to add input validation. Watch what happens after it edits the route file.
>
> There - it made the edit, and immediately the lint hook fired. You can see in the debug output: "Running postToolUse hook: lint-on-edit." The code is formatted to our standard before the agent even continues.

**CAMTASIA ACTION**: Now type: "Also update the .env file to add a MAX_TITLE_LENGTH variable." Watch the block hook deny it.

> Now I'll ask it to touch a protected file. "Update .env to add a config variable."
>
> Watch - "preToolUse hook denied: This file is protected by team policy. Suggest adding the configuration to a different file."
>
> The agent adapted. It's suggesting we add the constant to a `config.py` file instead. The guardrail worked.

### OUTRO (3:40-3:55)

> Hooks are deterministic guardrails that fire every time, regardless of which model or agent is running. Lint after every edit, block protected files, auto-run tests. Your team's policies, enforced by code.
>
> Next: bundling everything into a plugin. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A7-hooks`
- [ ] hooks.json, all three scripts in place and executable
- [ ] `black` and `prettier` installed
- [ ] .env file exists with some content (to test blocking)
- [ ] Tests currently passing (clean baseline)
- [ ] Pre-test each hook to verify it fires

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + lifecycle diagram | 0:20 | Overlay timeline showing pre/post events |
| 2 | Walk through hooks.json | 0:40 | Zoom on each hook definition |
| 3 | lint-on-edit.sh | 0:30 | Quick, zoom on key logic |
| 4 | block-protected.sh | 0:30 | Zoom on protected file list |
| 5 | auto-test.sh | 0:25 | Quick |
| 6 | Demo: lint hook fires after edit | 0:45 | Show debug output |
| 7 | Demo: block hook denies .env edit | 0:20 | Show denial message |
| 8 | Outro | 0:15 | Template |

### Post-Recording
- [ ] Callout annotation on hook event names (preToolUse, postToolUse)
- [ ] Zoom on debug output when hooks fire
- [ ] Highlight the denial message
- [ ] Lower thirds: "PostToolUse: Lint", "PreToolUse: Block", "PostToolUse: Test"

---

## Demo Repo Branch Spec

### Starting State (`video/A7-hooks`)
```
- .github/hooks/hooks.json (3 hooks defined)
- .github/hooks/lint-on-edit.sh (executable)
- .github/hooks/block-protected.sh (executable)
- .github/hooks/auto-test.sh (executable)
- .env file (with some content - protected)
- Full Tailspin Toys app, tests passing
```

### Ending State (`video/A7-complete`)
```
Starting state PLUS:
- server/routes/games.py (updated with input validation, auto-formatted)
- server/config.py (new, with MAX_TITLE_LENGTH - because .env was blocked)
```
