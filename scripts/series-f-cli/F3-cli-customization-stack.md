# F3 - Copilot CLI Customization Stack: Agents, Skills, Hooks & Plugins

> **Series**: Copilot CLI
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/F3-cli-customization`
> **Complete Branch**: `video/F3-complete`

---

## Overview

**What viewers learn**: How the same agents, skills, and hooks from VS Code work in Copilot CLI, plus CLI-specific features like `/plugin install`, AGENTS.md discovery, and hook lifecycle events.

**Prerequisites**: A1 (agents), A5 (skills), A7 (hooks) from the VS Code series.

**Key files touched**:
- AGENTS.md, .github/agents/, .github/skills/, .github/hooks/

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title + portability diagram | VS Code <-> CLI <-> Cloud Agent | "Same customizations. Every surface." |
| 3 | 0:30-1:00 | Terminal: show loaded customizations | Start CLI in the repo, show what auto-loads | "Copilot CLI discovers your files automatically." |
| 4 | 1:00-1:25 | Terminal: use a custom agent | Select the security reviewer agent from CLI | "Your VS Code agents work here too." |
| 5 | 1:25-1:50 | Terminal: trigger a skill | Ask a prompt that triggers a skill | "Skills auto-load by description matching." |
| 6 | 1:50-2:15 | Terminal: hooks firing | Show a hook running after an edit | "Hooks fire on the same lifecycle events." |
| 7 | 2:15-2:50 | Terminal: /plugin install | Install a plugin from GitHub | "Plugins bring external customizations in." |
| 8 | 2:50-3:15 | Editor: AGENTS.md | Show cross-tool instruction file | "AGENTS.md: one file, every tool." |
| 9 | 3:15-3:40 | Terminal: CLI-specific events | Show userPromptSubmitted and errorOccurred hooks | "CLI has extra hook events VS Code doesn't." |
| 10 | 3:40-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Everything you built in VS Code - agents, skills, hooks, MCP servers - works in Copilot CLI without any changes. The customization format is portable across every Copilot surface.
>
> But CLI also has its own extras: plugin install, AGENTS.md discovery, and additional hook events. Let's see the full stack.

### SECTION 1: Auto-Discovery (0:30-1:00)

**CAMTASIA ACTION**: Open terminal in the Tailspin Toys repo. Start `copilot` CLI. Show the startup messages listing loaded customizations.

> When Copilot CLI starts in a repo, it scans for customizations automatically. Watch the startup output - it found `copilot-instructions.md`, three agent files, two skills, and a hooks configuration. All loaded without any CLI-specific config.

### SECTION 2: Using Agents and Skills (1:00-1:50)

**CAMTASIA ACTION**: In CLI, select the security reviewer agent. Send a review prompt. Show it working.

> I can select agents just like VS Code. Here's our security reviewer from video A1. Same agent file, same behavior, different interface.

**CAMTASIA ACTION**: Type a prompt that triggers the API endpoint skill. Show it loading.

> And skills trigger by description matching. "Generate a new endpoint for publishers" - the API endpoint generator skill loads. Identical behavior to VS Code.

### SECTION 3: Hooks and Plugins (1:50-3:15)

**CAMTASIA ACTION**: Have the agent edit a file. Show the lint hook firing in the terminal.

> Hooks fire on the same events. The agent edits a file, the `postToolUse` lint hook runs, code is formatted. Same hooks.json, same scripts.

**CAMTASIA ACTION**: Type `/plugin install awesome-copilot/security-pack`. Show installation.

> Now for a CLI extra. `/plugin install` pulls customizations from any GitHub repo. This security pack adds a vulnerability scanner agent, a secret detection skill, and a pre-commit hook. Installed in seconds.

**CAMTASIA ACTION**: Open AGENTS.md in the editor. Show it's a universal instruction file.

> `AGENTS.md` at the repo root is the universal instruction file. Copilot CLI reads it, VS Code reads it, Claude Code reads it, the cloud agent reads it. One file to rule them all.

### SECTION 4: CLI-Specific Hook Events (3:15-3:40)

**CAMTASIA ACTION**: Show hooks.json with `userPromptSubmitted` and `errorOccurred` events.

> CLI does have extra hook events. `userPromptSubmitted` fires before your prompt is processed - you could log it, transform it, or add context. `errorOccurred` fires on any error - you could auto-retry, notify, or escalate.
>
> These are available in CLI and cloud agent contexts where the lifecycle is slightly different from VS Code.

### OUTRO (3:40-3:55)

> One customization format, every surface. Build once in VS Code, use in CLI, deploy to cloud agent. That's the portability promise.
>
> Next: context mastery and infinite sessions. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/F3-cli-customization`
- [ ] All agents/skills/hooks from previous videos in place
- [ ] Copilot CLI installed and logged in
- [ ] Know a good plugin to /plugin install (pre-identified)
- [ ] AGENTS.md at repo root

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + portability diagram | 0:20 | Overlay |
| 2 | CLI startup showing auto-discovery | 0:30 | Zoom on loaded customizations |
| 3 | Use security reviewer agent from CLI | 0:25 | Quick demo |
| 4 | Trigger a skill in CLI | 0:25 | Show description match loading |
| 5 | Hook firing after edit | 0:25 | Show terminal output |
| 6 | /plugin install | 0:35 | Show installation |
| 7 | AGENTS.md walkthrough | 0:25 | Quick editor view |
| 8 | CLI-specific hook events | 0:25 | Zoom on hooks.json |
| 9 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/F3-cli-customization`)
```
- Full Tailspin Toys app with all customizations from prior videos
- AGENTS.md at repo root
- Copilot CLI configured
```

### Ending State (`video/F3-complete`)
```
Starting state PLUS:
- Installed plugin in ~/.copilot/plugins/ (or equivalent)
```
