# A12 - MCP Apps: Interactive UI in Agent Conversations

> **Series**: MCP & Integration
> **Length**: 4 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A12-mcp-apps`
> **Complete Branch**: `video/A12-complete`

---

## Overview

**What viewers learn**: What MCP Apps are - tool calls that return interactive UI components (dashboards, forms, visualizations) rendered directly in the chat conversation.

**Prerequisites**: A11 (MCP servers)

**Key files touched**:
- MCP App server code
- `.vscode/mcp.json`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card | "Interactive UI right in chat" | "MCP Apps render dashboards, forms, and visualizations inline." |
| 3 | 0:30-1:00 | Concept diagram | Tool call -> UI component -> rendered in chat | "Normal tools return text. MCP Apps return interactive UI." |
| 4 | 1:00-1:45 | Editor: MCP App server code | Walk through a simple status dashboard app | "An MCP App is an MCP server that returns UI components." |
| 5 | 1:45-2:15 | Editor: mcp.json | Register the app | "Register it like any MCP server." |
| 6 | 2:15-3:15 | Chat: live demo | Trigger the app, see dashboard render inline | "Ask for project status and get an interactive dashboard." |
| 7 | 3:15-3:40 | Chat: interact with rendered UI | Click buttons, expand sections in the dashboard | "It's not a screenshot. It's interactive." |
| 8 | 3:40-3:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Regular tools return text. Your agent reads a file, you get text. Runs a query, you get text. But what if a tool could return a full interactive dashboard, a form, or a data visualization - rendered right in the chat?
>
> That's MCP Apps. The first official MCP extension, and VS Code is the first editor to support it.

### SECTION 1: How MCP Apps Work (0:30-1:00)

**CAMTASIA ACTION**: Show a diagram: Agent calls tool -> MCP App server -> Returns UI components -> Rendered inline in chat.

> The concept is simple. An MCP App is an MCP server whose tool responses include UI components instead of just text. The server declares what it can render - cards, charts, forms, tables - and VS Code handles the rendering inline.

### SECTION 2: Building a Simple MCP App (1:00-1:45)

**CAMTASIA ACTION**: Open the MCP App server code. Walk through the tool definition and the UI component response.

> Here's a simple project status dashboard app. It's a standard MCP server with one tool: `get_project_status`.
>
> The difference is in the response. Instead of returning a string, it returns a UI component definition - a card with the project name, a progress bar for test coverage, a traffic light indicator for CI status, and a list of recent commits.
>
> The component schema uses a JSON format that VS Code knows how to render. Cards, tables, charts, buttons, forms - the spec is growing.

### SECTION 3: Register and Demo (1:45-3:40)

**CAMTASIA ACTION**: Show the MCP App registered in mcp.json. Then trigger it from chat.

> Register it in `mcp.json` just like any MCP server. No special configuration needed.

**CAMTASIA ACTION**: In chat, type "Show me the project status dashboard." Watch the dashboard render inline in the conversation.

> Now in chat: "Show me the project status dashboard."
>
> The agent calls the tool, and instead of a text response, you get this - a rendered dashboard right in the conversation. Test coverage at 87% with a green progress bar. CI passing. Last five commits listed with authors and timestamps.

**CAMTASIA ACTION**: Interact with the rendered dashboard - click a commit to expand details, toggle a section.

> And this isn't a screenshot - it's interactive. I can click on a commit to see its diff summary. I can collapse sections. The agent can refer to what's shown and take actions based on it.
>
> Imagine: a deployment status dashboard that lets you click "rollback" right from chat. A database schema visualizer you can explore. A form that collects parameters for a complex task.

### OUTRO (3:40-3:55)

> MCP Apps bring visual, interactive tools directly into the agent conversation. This is early - it's in preview - but it changes what "agent output" can look like.
>
> Next: putting it all together in a CI/CD pipeline. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A12-mcp-apps`
- [ ] MCP App server running and registered
- [ ] VS Code Insiders (if needed for MCP Apps support)
- [ ] Pre-test the rendering to ensure it works smoothly
- [ ] Have some real project data for the dashboard to show

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + title card | 0:20 | Template |
| 2 | Concept diagram | 0:30 | Overlay animation |
| 3 | Walk through MCP App server code | 0:45 | Zoom on UI component response |
| 4 | Show mcp.json registration | 0:30 | Quick |
| 5 | Live demo: trigger dashboard | 0:30 | Show rendering |
| 6 | Interact with dashboard | 0:30 | Click around, show it's interactive |
| 7 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A12-mcp-apps`)
```
- MCP App server code in tools/status-dashboard/
- .vscode/mcp.json with the app registered
- Project with some real data (commits, tests, CI)
```

### Ending State (`video/A12-complete`)
```
Same as starting state (demo is observational)
```
