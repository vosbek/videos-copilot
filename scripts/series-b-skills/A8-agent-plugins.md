# A8 - Agent Plugins: Bundle & Distribute Your Customizations

> **Series**: Skills & Customization
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A8-agent-plugins`
> **Complete Branch**: `video/A8-complete`

---

## Overview

**What viewers learn**: How agent plugins bundle skills, agents, hooks, and MCP servers into installable packages. Browse the marketplace, install a plugin, and build your own.

**Prerequisites**: A5 (skills), A7 (hooks)

**Key files touched**:
- Plugin directory structure
- VS Code Extensions view (`@agentPlugins`)

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + bundle diagram | Show what a plugin contains | "One plugin, many customizations." |
| 3 | 0:30-1:05 | VS Code: Extensions sidebar | Browse @agentPlugins | "The marketplace ships in VS Code." |
| 4 | 1:05-1:30 | Install a community plugin | Click install, show it loading | "One click to install a full customization stack." |
| 5 | 1:30-1:50 | Chat: trigger the plugin | Use a skill from the installed plugin | "It's already active." |
| 6 | 1:50-2:40 | Editor: plugin file structure | Show agents/, skills/, hooks/, mcp/ | "Let's build our own from the customizations we've made." |
| 7 | 2:40-3:10 | Terminal: package and publish | Push to GitHub repo | "A GitHub repo is all you need." |
| 8 | 3:10-3:40 | VS Code/CLI: install own plugin | /plugin install or marketplace | "Now anyone on your team can install it." |
| 9 | 3:40-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> You've built agents, skills, hooks, and MCP configs across this series. But right now they live in one repo. What if you want to share them across projects? Or distribute them to your team?
>
> Agent plugins bundle everything into one installable package.

### SECTION 1: Browse the Marketplace (0:30-1:50)

**CAMTASIA ACTION**: Open Extensions sidebar (Cmd+Shift+X). Type `@agentPlugins` in the search field. Browse the list.

> Open the Extensions view and type `@agentPlugins`. This surfaces plugins from the copilot-plugins and awesome-copilot repos - community and official.
>
> Each plugin shows what it provides - you might see a security-focused plugin with three agents, two skills, and a hook. Or a documentation plugin with skills for generating READMEs and API docs.

**CAMTASIA ACTION**: Click install on a community plugin. Show the installation completing.

> I'll install this one. One click. It downloads the agents, skills, hooks, and any MCP server configs. They're immediately active.

**CAMTASIA ACTION**: In chat, type a prompt that triggers the installed plugin's skill.

> And it's already working. I type a prompt that matches the plugin's skill, and there it is - loaded and ready.

### SECTION 2: Build Your Own Plugin (1:50-3:10)

**CAMTASIA ACTION**: Show the plugin directory structure in the editor.

> Now let's build our own. A plugin is a GitHub repo with a specific structure.
>
> At the root, you have `agents/` with your `.agent.md` files, `skills/` with your SKILL.md directories, `hooks/` with a `hooks.json` and your scripts, and optionally `mcp/` with MCP server configurations.
>
> We already have all of this from our video series. Let me reorganize it into plugin format.

**CAMTASIA ACTION**: Show moving/copying the files into the plugin structure. Add a plugin manifest.

> The plugin also needs a manifest at the root - `plugin.json` - that declares the name, version, description, and what customizations are included. Think of it as the package.json for your agent stack.

**CAMTASIA ACTION**: Push to GitHub.

> Publishing is simple - push it to a GitHub repo. That's it. No registry, no build step. The repo IS the package.

### SECTION 3: Install Your Plugin (3:10-3:40)

**CAMTASIA ACTION**: In Copilot CLI, type `/plugin install your-username/your-plugin-repo`. Then show it appearing in VS Code's @agentPlugins list.

> Now anyone can install it. In Copilot CLI: `/plugin install your-org/copilot-team-toolkit`. In VS Code, add your repo as a custom marketplace source in settings, and it shows up right alongside the community plugins.
>
> Your whole team gets the same agents, skills, hooks, and MCP servers. Consistent behavior across every developer's environment.

### OUTRO (3:40-3:55)

> Plugins are how you go from "works on my machine" to "works on every machine." Bundle your customizations, push to GitHub, install everywhere.
>
> Next: the Agent Debug Panel. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A8-agent-plugins`
- [ ] Know a good community plugin to install (pre-identified)
- [ ] Have the plugin directory structure ready to show
- [ ] GitHub repo created for "your" plugin (can be empty)

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + bundle diagram | 0:20 | Overlay showing what a plugin contains |
| 2 | Browse @agentPlugins in Extensions | 0:35 | Scroll through a few options |
| 3 | Install a community plugin | 0:25 | One click, show completion |
| 4 | Trigger the plugin's skill | 0:20 | Quick demo |
| 5 | Walk through plugin directory structure | 0:50 | Show agents/, skills/, hooks/ |
| 6 | Push to GitHub | 0:30 | Quick terminal action |
| 7 | /plugin install from CLI | 0:20 | Show it appearing |
| 8 | Outro | 0:15 | Template |

### Post-Recording
- [ ] Overlay: plugin structure diagram during section 2
- [ ] Callout on @agentPlugins filter
- [ ] Zoom on plugin.json manifest
- [ ] Lower thirds: "Marketplace", "Structure", "Publish", "Install"

---

## Demo Repo Branch Spec

### Starting State (`video/A8-agent-plugins`)
```
- All agents/skills/hooks from previous videos exist in the Tailspin Toys repo
- A separate GitHub repo for the plugin (pre-created, empty)
```

### Ending State (`video/A8-complete`)
```
Plugin repo contains:
- plugin.json (manifest)
- agents/security-reviewer.agent.md
- agents/tdd-coordinator.agent.md (etc.)
- skills/api-endpoint-generator/SKILL.md
- hooks/hooks.json + scripts
```
