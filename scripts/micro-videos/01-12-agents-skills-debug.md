# Micro-Videos 01-12: Agents, Skills & Debugging

---

## MICRO-01: /create-agent in 60 Seconds

> **Length**: ~60s | **Category**: Agent Basics | **Branch**: `micro/create-agent`

### Script (~100 words)

> Creating a custom agent takes one command. Open Copilot chat, type `/create-agent`, and describe what you want: "A documentation agent that writes clear README files and API docs."
>
> Copilot generates an `.agent.md` file with frontmatter - name, description, tools, and instructions. The file lands in `.github/agents/`.
>
> You can customize it immediately - restrict tools, change the model, add detailed instructions. Save, and it appears in your agent picker.
>
> That's it. From zero to custom agent in under a minute. Full video: A1.

### Camtasia Checklist
- [ ] VS Code open with chat panel
- [ ] Record: type `/create-agent` -> describe -> show generated file
- [ ] Zoom on generated frontmatter
- [ ] Speed up AI generation 3x

---

## MICRO-02: Agent Frontmatter Explained

> **Length**: ~60s | **Category**: Agent Basics | **Branch**: `micro/agent-frontmatter`

### Script (~110 words)

> Every agent file starts with YAML frontmatter. Here's what each field does.
>
> `description` - what shows in the agent picker and helps Copilot match your request.
>
> `tools` - which tools this agent can use. `readFile`, `editFile`, `search`, `runTerminal`, MCP tools. Remove tools to restrict behavior.
>
> `model` - optionally pin to a specific model. Useful when you want Opus for deep analysis or Haiku for quick tasks.
>
> `subagents` - declare which other agents this one can delegate to.
>
> `handoffs` - define transition buttons to other agents with pre-filled prompts.
>
> Below the frontmatter is Markdown instructions - the agent's persona and behavioral guidelines. Full video: A1.

### Camtasia Checklist
- [ ] Open an .agent.md file
- [ ] Zoom into each frontmatter field as you explain it
- [ ] Use callout annotations labeling each field

---

## MICRO-03: Switching Between Agents

> **Length**: ~60s | **Category**: Agent Basics | **Branch**: `micro/switch-agents`

### Script (~90 words)

> Switching agents mid-session takes one click. In the chat input area, click the agent picker dropdown. All your custom agents appear alongside the default.
>
> Select a different agent and your next message uses that persona, tools, and instructions. The conversation context carries over - the new agent sees what happened before.
>
> Pro tip: use this to get a second opinion. Ask your implementer to build something, then switch to your reviewer to critique it - same conversation, different expertise.
>
> Full video: A1.

### Camtasia Checklist
- [ ] Show agent picker dropdown
- [ ] Click through 2-3 agents
- [ ] Zoom on the picker each time

---

## MICRO-04: Agent Tool Restrictions

> **Length**: ~60s | **Category**: Agent Basics | **Branch**: `micro/tool-restrictions`

### Script (~100 words)

> Control what your agent can do by restricting its tools. In the frontmatter `tools` list, only include what the agent needs.
>
> A review agent? `readFile`, `search`, `grep` only. No editing.
>
> A test writer? `createFile`, `editFile` for the tests directory, plus `runTerminal` for pytest.
>
> An explorer? `readFile`, `search`, `listDirectory`, `grep`. Read everything, change nothing.
>
> When an agent tries a tool it doesn't have, it adapts its approach. A read-only agent will report findings instead of trying to fix them.
>
> Restriction creates focus. Full video: A1.

### Camtasia Checklist
- [ ] Show an agent.md file's tools list
- [ ] Edit it to remove tools
- [ ] Show the agent adapting when it can't edit

---

## MICRO-05: /create-skill in 60 Seconds

> **Length**: ~60s | **Category**: Skills | **Branch**: `micro/create-skill`

### Script (~100 words)

> Skills teach Copilot specialized workflows. Create one in seconds.
>
> Type `/create-skill` in chat. Describe what you want: "A skill for generating database migration files following our project patterns."
>
> Copilot generates a `SKILL.md` file in `.github/skills/` with frontmatter - name and description - plus detailed instructions.
>
> Or extract from context: after Copilot helps you with something, say "create a skill from what we just did." It captures the workflow as a reusable skill.
>
> Skills auto-load when relevant and work across VS Code, CLI, and cloud agent. Full video: A5.

### Camtasia Checklist
- [ ] Type /create-skill in chat
- [ ] Show generated SKILL.md
- [ ] Quick zoom on frontmatter

---

## MICRO-06: SKILL.md Anatomy

> **Length**: ~60s | **Category**: Skills | **Branch**: `micro/skill-anatomy`

### Script (~110 words)

> Every skill is a SKILL.md file with two parts.
>
> Part one: YAML frontmatter. `name` is the unique identifier. `description` is critical - this is how Copilot decides whether to load your skill. A vague description means poor triggering. Be specific about what this skill does and when.
>
> Part two: the Markdown body. This is the detailed instructions, procedures, and guidelines that load into context when the skill triggers.
>
> Skills load progressively. Copilot reads the description first - lightweight. Only when it matches does it load the full body into context. This keeps your context window efficient.
>
> Skills can also include scripts and resource files alongside the SKILL.md. Full video: A5.

### Camtasia Checklist
- [ ] Open a SKILL.md file
- [ ] Zoom on frontmatter (name, description)
- [ ] Scroll to body
- [ ] Callout: "Description = trigger. Body = instructions."

---

## MICRO-07: Why Isn't My Skill Loading?

> **Length**: ~60s | **Category**: Debugging | **Branch**: `micro/skill-debug`

### Script (~110 words)

> Your skill won't trigger. Here's how to diagnose it.
>
> Open the Agent Debug Panel: Chat view > ellipsis menu > Show Agent Debug Logs. Look at the customization events.
>
> If your skill isn't listed under loaded customizations, the description didn't match your prompt. The fix: make your description more specific. Include the keywords users would actually type.
>
> If it IS listed but not working, the instructions might be unclear. Check the body content for ambiguous or conflicting directions.
>
> Pro tip: use Anthropic's skill-creator to run evals against your description. You'll see exactly which prompts trigger and which don't. Full video: A9.

### Camtasia Checklist
- [ ] Open Agent Debug Panel
- [ ] Show customization events - skill missing
- [ ] Show the vague description
- [ ] Fix it, reload, show it loading

---

## MICRO-08: Skill Progressive Loading

> **Length**: ~60s | **Category**: Skills | **Branch**: `micro/progressive-loading`

### Script (~90 words)

> Copilot doesn't load every skill into context. That would waste tokens. Instead, it uses progressive loading.
>
> Step one: Copilot reads only the name and description from every skill's frontmatter. This is lightweight - a few tokens each.
>
> Step two: when your prompt matches a skill's description, Copilot loads the full Markdown body into context.
>
> This means a repo with 20 skills doesn't consume 20x the context. Only relevant skills load.
>
> Write sharp descriptions so the right skills trigger. Vague descriptions waste context on false positives. Full video: A5.

### Camtasia Checklist
- [ ] Diagram: 20 skills -> description scan -> 1 loads
- [ ] Show debug panel confirming which loaded

---

## MICRO-09: Open the Agent Debug Panel

> **Length**: ~60s | **Category**: Debugging | **Branch**: `micro/debug-panel`

### Script (~80 words)

> Three clicks to see everything your agent does.
>
> Chat view. Click the ellipsis menu - the three dots at the top. Select "Show Agent Debug Logs."
>
> The panel opens and immediately streams events. System prompts, tool calls, customization loading, model responses - it's all there in real time.
>
> Think of it as DevTools for your AI agent. When something unexpected happens, this is your first stop.
>
> It works for any agent - built-in or custom. Full video: A9.

### Camtasia Checklist
- [ ] Show the 3-click path clearly
- [ ] Zoom on each click
- [ ] Events streaming in panel

---

## MICRO-10: Reading the Flow Chart

> **Length**: ~60s | **Category**: Debugging | **Branch**: `micro/flow-chart`

### Script (~100 words)

> The Agent Flow Chart visualizes your orchestration.
>
> After a multi-agent session, open it: Chat view > Summary > Agent Flow Chart.
>
> Here's how to read it. The root node is your coordinator or primary agent. Arrows down represent delegations to subagents. Arrows back up are results returning.
>
> Colors matter: blue for coordinators, green for successful completions, red for failures. Click any node to see details - the brief it received, tools it called, how long it took.
>
> Sequential patterns are tall and narrow. Parallel fan-outs are wide. The shape tells you the orchestration pattern at a glance. Full video: A10.

### Camtasia Checklist
- [ ] Open a flow chart from a multi-agent session
- [ ] Pan around, point out colors
- [ ] Click a node, show detail panel

---

## MICRO-11: Inspecting Tool Calls

> **Length**: ~60s | **Category**: Debugging | **Branch**: `micro/tool-calls`

### Script (~90 words)

> In the Agent Debug Panel, every tool call is logged with full detail.
>
> Find a `readFile` event - expand it. You see the exact file path requested and the content returned. Find an `editFile` event - you see the exact diff applied.
>
> A `runTerminal` event shows the command, stdout, stderr, and exit code.
>
> This is how you debug unexpected behavior. If the agent edited the wrong file, read the wrong content, or ran a command that failed - it's all here. The inputs, the outputs, the timing.
>
> Full video: A9.

### Camtasia Checklist
- [ ] Open debug panel with events
- [ ] Expand a readFile event
- [ ] Expand an editFile event
- [ ] Zoom on inputs and outputs

---

## MICRO-12: Finding Loaded Customizations

> **Length**: ~60s | **Category**: Debugging | **Branch**: `micro/loaded-customizations`

### Script (~100 words)

> What's actually loaded in your session? The debug panel tells you.
>
> Open Agent Debug Logs and scroll to the customization events. You'll see a complete list: which instruction files loaded, which skills matched, which hooks are registered, which agents are available.
>
> This is your source of truth. If `copilot-instructions.md` isn't in the list, the file might be in the wrong location. If your skill isn't listed, the description didn't match. If a hook is missing, check the `hooks.json` syntax.
>
> Always verify your loaded customizations when debugging. Assumptions about what loaded are the #1 source of confusion. Full video: A9.

### Camtasia Checklist
- [ ] Open debug panel
- [ ] Scroll to customization events
- [ ] Expand the list
- [ ] Zoom on each customization type
