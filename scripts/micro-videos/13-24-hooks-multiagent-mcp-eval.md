# Micro-Videos 13-24: Hooks, Multi-Agent, MCP & Eval

---

## MICRO-13: Add a Post-Edit Lint Hook

> **Length**: ~60s | **Category**: Hooks | **Branch**: `micro/lint-hook`

### Script (~100 words)

> Auto-format every file your agent edits. Here's how.
>
> In `.github/hooks/hooks.json`, add a `postToolUse` hook that watches for `editFile` events. Point it to a shell script.
>
> The script receives the edited file path, runs your formatter - `black` for Python, `prettier` for JavaScript - and the formatted result flows back to the agent.
>
> The agent sees clean, formatted code without having to think about formatting. Every edit, every time, every agent.
>
> Make the script executable: `chmod +x`. That's the most common gotcha. Full video: A7.

### Camtasia Checklist
- [ ] Show hooks.json with the hook definition
- [ ] Show the script
- [ ] Agent edits a file -> linter runs

---

## MICRO-14: Block File Modifications

> **Length**: ~60s | **Category**: Hooks | **Branch**: `micro/block-hook`

### Script (~100 words)

> Protect sensitive files from agent modifications.
>
> Add a `preToolUse` hook in `hooks.json` that watches `editFile` and `createFile`. Your script checks if the target path matches a protected list: `.env`, `docker-compose.yml`, CI configs, the hooks themselves.
>
> If the file is protected, exit with non-zero status and a message. The agent sees the denial and adapts - it won't retry. It'll suggest an alternative approach.
>
> This is deterministic. No matter which model or agent, the protection holds. Your team's policies, enforced by code, not by hoping the AI follows instructions. Full video: A7.

### Camtasia Checklist
- [ ] Show the preToolUse hook in hooks.json
- [ ] Show the protected file list in the script
- [ ] Agent tries to edit .env -> gets blocked

---

## MICRO-15: Auto-Test Hook

> **Length**: ~60s | **Category**: Hooks | **Branch**: `micro/auto-test`

### Script (~90 words)

> Run your test suite every time the agent changes source code.
>
> A `postToolUse` hook on `editFile` checks if the modified file is in your source directory. If so, it runs pytest, npm test, or whatever your project uses.
>
> The test output goes straight back to the agent. If tests fail, the agent sees the failures and can self-correct immediately - no waiting for you to notice.
>
> Combine this with the lint hook for a tight feedback loop: edit, format, test. Automatic quality assurance on every change. Full video: A7.

### Camtasia Checklist
- [ ] Show hooks.json
- [ ] Agent edits source file -> tests run
- [ ] Show test output flowing back to agent

---

## MICRO-16: Start a Claude Session Alongside Copilot

> **Length**: ~60s | **Category**: Multi-Agent | **Branch**: N/A

### Script (~90 words)

> VS Code supports multiple AI agents side by side. Open the Agent Sessions view in the sidebar. You'll see your Copilot session.
>
> Start a new session and select Claude from the agent picker. Now you have both running - Copilot for one task, Claude for another.
>
> Each session has its own context, tools, and conversation history. Delegate different tasks to different agents and compare their approaches.
>
> Check the Agent Sessions view to monitor all running sessions, jump between them, and see their status at a glance. Full video reference: VS Code docs.

### Camtasia Checklist
- [ ] Open Agent Sessions view
- [ ] Start a Claude session
- [ ] Show both running side-by-side

---

## MICRO-17: Agent Sessions View Tour

> **Length**: ~60s | **Category**: Multi-Agent | **Branch**: N/A

### Script (~90 words)

> The Agent Sessions view is your control center. Open it from the sidebar.
>
> Every running session appears here - local, background, and cloud. Each shows: which agent is running, its current status, and how long it's been active.
>
> Click a session to switch to it. Right-click for options - pause, resume, or terminate.
>
> Background sessions keep working while you focus on something else. Cloud sessions run on GitHub's infrastructure.
>
> When you have multiple agents running in parallel, this is how you keep track of everything. Full video reference: VS Code docs.

### Camtasia Checklist
- [ ] Open Agent Sessions view with 2-3 sessions running
- [ ] Click between sessions
- [ ] Show status indicators

---

## MICRO-18: Handoff Buttons

> **Length**: ~60s | **Category**: Multi-Agent | **Branch**: `micro/handoff-buttons`

### Script (~100 words)

> Handoff buttons appear at the bottom of an agent's response. One click transitions you to the next agent with context.
>
> Configure them in the `handoffs` section of your agent's frontmatter. Each handoff has a target agent, a button label, and a prompt template.
>
> The `{{response}}` variable passes the current agent's output into the next agent's prompt. Context flows forward automatically.
>
> Add `send: true` and the handoff auto-submits - no extra click needed. Perfect for multi-step pipelines where you want seamless flow from planning to implementation to review.
>
> Full video: A3.

### Camtasia Checklist
- [ ] Show a handoff button appearing after agent response
- [ ] Click it -> switch to next agent
- [ ] Zoom on the frontmatter config

---

## MICRO-19: Local vs Cloud Agents

> **Length**: ~60s | **Category**: Multi-Agent | **Branch**: N/A

### Script (~90 words)

> Local agents run on your machine - fast, interactive, great for steering.
>
> Cloud agents run on GitHub's infrastructure - isolated environment, great for long-running tasks that would tie up your machine.
>
> Use local for: interactive development, quick tasks, anything where you want to steer in real time.
>
> Use cloud for: big refactors, CI-like tasks, anything you want to delegate and check on later.
>
> You can switch between them with `/resume` in CLI, or the Agent Sessions view in VS Code. Same context, different execution environment.

### Camtasia Checklist
- [ ] Start a local session
- [ ] Delegate to cloud with &
- [ ] Show both in Agent Sessions view

---

## MICRO-20: Install an MCP Server

> **Length**: ~60s | **Category**: MCP | **Branch**: `micro/install-mcp`

### Script (~80 words)

> Add new tools to your agents in under a minute.
>
> Open Extensions view, type `@mcp`. Browse the MCP server gallery - databases, APIs, cloud providers.
>
> Click install on the one you need. It prompts for configuration - connection string, API key, file path. Done.
>
> The server's tools are now available to any agent that includes them in its tools list. Check your `mcp.json` to see the configuration.
>
> From gallery to working tool: one click plus one config. Full video: A11.

### Camtasia Checklist
- [ ] Open Extensions > @mcp
- [ ] Install a server
- [ ] Show mcp.json config

---

## MICRO-21: MCP Apps Preview

> **Length**: ~60s | **Category**: MCP | **Branch**: `micro/mcp-apps`

### Script (~90 words)

> MCP Apps let tool calls return interactive UI right in the chat.
>
> Instead of text, the tool returns a component definition - a card, a chart, a form. VS Code renders it inline.
>
> Here's an example: "Show me project status." The MCP App returns a dashboard with a progress bar, CI status indicator, and a list of recent commits. All rendered inside the conversation.
>
> You can click, expand, and interact. The agent can reference the displayed data.
>
> This is in preview - available in VS Code Insiders. Full video: A12.

### Camtasia Checklist
- [ ] Trigger an MCP App from chat
- [ ] Show the UI rendering inline
- [ ] Click/interact with it

---

## MICRO-22: Run a Skill Eval

> **Length**: ~60s | **Category**: Eval | **Branch**: `micro/run-eval`

### Script (~100 words)

> Test whether your skill triggers correctly with evals.
>
> Create test cases: queries that SHOULD trigger your skill and queries that SHOULDN'T. Put them in a JSON file.
>
> The eval runner splits them 60/40 into train and test sets. It runs each query three times against your skill - three runs because AI is non-deterministic.
>
> The result: a trigger accuracy percentage. 80% means your skill triggers on 80% of the prompts it should.
>
> Low accuracy? Your description needs work. That's what the optimization loop in video A6 is for. Full video: A6.

### Camtasia Checklist
- [ ] Show eval-cases.json
- [ ] Run the eval command
- [ ] Show accuracy results

---

## MICRO-23: Read an Eval HTML Report

> **Length**: ~60s | **Category**: Eval | **Branch**: `micro/eval-report`

### Script (~100 words)

> The eval report tells you exactly what worked and what didn't.
>
> Open the HTML report in your browser. The top section shows overall accuracy: train accuracy and test accuracy. Test accuracy is what matters - it tells you how your skill performs on prompts it hasn't seen.
>
> Below that, every individual test case with its result across all three runs. Green: triggered correctly. Red: missed.
>
> The variance column is crucial. High variance means unreliable triggering - sometimes it works, sometimes it doesn't. That's worse than consistently not triggering.
>
> Use this to target your optimization. Full video: A6.

### Camtasia Checklist
- [ ] Open HTML report in browser
- [ ] Zoom on overall accuracy
- [ ] Zoom on individual cases
- [ ] Highlight high-variance cases

---

## MICRO-24: Optimize a Skill Description

> **Length**: ~60s | **Category**: Eval | **Branch**: `micro/optimize-skill`

### Script (~100 words)

> Your skill triggers at 67%. Let's get it to 90%+.
>
> Run the optimization loop. It takes your failing test cases, sends them to Claude, and asks for a better description. Then it re-evaluates on both train and test sets.
>
> Up to five iterations. Each round proposes a new description and measures its accuracy.
>
> The key: it selects the winner by test score, not training score. This prevents overfitting - your optimized description works on new prompts, not just the ones it practiced on.
>
> Our result: 67% to 93% in three iterations. Ship it. Full video: A6.

### Camtasia Checklist
- [ ] Show the optimization command running
- [ ] Show iteration results: 72% -> 81% -> 93%
- [ ] Show before/after description
