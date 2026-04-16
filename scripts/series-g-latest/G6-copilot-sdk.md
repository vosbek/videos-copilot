# G6 - Copilot SDK: Build an Agent Into Any App

> **Series**: Latest 2026 Features
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/G6-copilot-sdk`
> **Complete Branch**: `video/G6-complete`

---

## Overview

**What viewers learn**: How the Copilot SDK (public preview) lets you embed a Copilot agent into any app - with tool calling, file editing, command execution, custom agents, and sub-agent orchestration - using Node.js, Python, Go, or .NET.

**Prerequisites**: Programming experience in at least one SDK language.

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> The Copilot SDK takes everything we've covered - agents, tools, orchestration - and makes it programmable. Build a Copilot agent into a CLI tool, a web service, a CI pipeline, or any application. It plans, invokes tools, edits files, and runs commands as a library you control.

### SECTION 1: SDK Overview (0:30-1:15)

**CAMTASIA ACTION**: Show the SDK architecture diagram. Then open package.json or requirements.txt showing the SDK dependency.

> The SDK is available for Node.js, Python, Go, and .NET. You can use your GitHub Copilot subscription or bring your own API key.
>
> The core concept: you create a session, attach agents with their own system prompts and tool restrictions, and let the agent work. The SDK handles the model interaction, tool execution, and context management.

### SECTION 2: Building a Simple Agent (1:15-2:30)

**CAMTASIA ACTION**: Open a simple Node.js script. Walk through the code step by step.

> Here's a minimal example. Create a session with `createSession()`. Define an agent with a system prompt and tool whitelist. Send a message and stream the response.
>
> The agent can call tools just like in VS Code - read files, edit files, run commands, search code. But now you control the loop programmatically.
>
> I can add custom tools too. Here I'm adding a `deployToStaging` tool that hits our deployment API. The SDK calls it when the agent decides it's time to deploy.

### SECTION 3: Sub-Agent Orchestration via SDK (2:30-3:20)

**CAMTASIA ACTION**: Show code with multiple agents defined, a coordinator that delegates to workers.

> You can define multiple agents in one session and orchestrate them programmatically. Here's a coordinator agent that delegates to an implementer and a tester.
>
> The difference from VS Code? You have full programmatic control. You can add conditional logic - if tests fail three times, escalate to a human. If the diff is over 500 lines, require a review agent. Business logic that goes beyond what `.agent.md` files can express.

### SECTION 4: Real Use Case (3:20-4:20)

**CAMTASIA ACTION**: Show a complete CLI tool built with the SDK - a "migration validator" that checks database migrations.

> Here's a real use case: a migration validator. It's a CLI tool our team runs before merging any PR with database changes. It uses the SDK to create an agent that reads the migration file, checks it against our schema conventions, runs it against a test database, and reports issues.
>
> This runs in CI as a GitHub Action. The agent has access to our MCP server for the test database and our custom validation skill. All the customization primitives from VS Code - usable programmatically.

### SECTION 5: Using with Copilot Subscription (4:20-4:45)

**CAMTASIA ACTION**: Show the auth configuration - using Copilot subscription vs API key.

> You authenticate with your GitHub Copilot subscription - same models, same quota. Or bring your own API key for any supported model. The SDK abstracts the model layer so you can switch without changing agent logic.

### OUTRO (4:45-5:00)

> The SDK turns Copilot from an IDE feature into an infrastructure component. Build agents into your tools, your pipelines, your services.
>
> Next: Agent security pipeline. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/G6-copilot-sdk`
- [ ] Copilot SDK installed (npm/pip)
- [ ] Working example scripts ready
- [ ] Migration validator CLI tool built and working
- [ ] GitHub Copilot subscription auth configured

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro | 0:20 | Template |
| 2 | SDK architecture + dependency | 0:45 | Diagram + package.json |
| 3 | Walk through minimal agent code | 1:15 | Zoom on each section |
| 4 | Sub-agent orchestration code | 0:50 | Show coordinator logic |
| 5 | Migration validator demo | 1:00 | Run it, show output |
| 6 | Auth configuration | 0:25 | Quick |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/G6-copilot-sdk`)
```
- tools/sdk-examples/minimal-agent.js
- tools/sdk-examples/orchestration.js
- tools/migration-validator/ (complete CLI tool)
- package.json with @github/copilot-sdk dependency
```

### Ending State (`video/G6-complete`)
```
Same (walkthrough + demo, code already exists)
```
