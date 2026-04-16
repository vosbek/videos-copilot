# A11 - Building MCP Server Integrations for Agents

> **Series**: MCP & Integration
> **Length**: 4.5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A11-mcp-servers`
> **Complete Branch**: `video/A11-complete`

---

## Overview

**What viewers learn**: How MCP servers extend agents with external tools - install from the gallery, configure in workspace, and connect agents to a database server for real data access.

**Prerequisites**: Basic agent mode familiarity.

**Key files touched**:
- `.vscode/mcp.json` or `.github/mcp/mcp.json`
- Agent files referencing MCP tools

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + diagram | Agent -> MCP Server -> External Service | "MCP servers give agents tools to reach the outside world." |
| 3 | 0:30-1:05 | VS Code: @mcp gallery | Browse MCP servers in Extensions | "Install from the gallery or add your own." |
| 4 | 1:05-1:30 | Install a database MCP server | Click install, show configuration | "Let's connect our agent to our database." |
| 5 | 1:30-2:05 | Editor: mcp.json | Show the configuration | "MCP servers are declared in mcp.json." |
| 6 | 2:05-2:35 | Editor: agent using MCP tools | Show an agent with MCP tools listed | "Agents reference MCP tools in their frontmatter." |
| 7 | 2:35-3:45 | Chat: live demo | Agent queries the database through MCP | "Ask the agent a question, it uses the MCP server to get real data." |
| 8 | 3:45-4:10 | Agent Debug Panel | Show MCP tool calls in event stream | "In the debug panel, MCP calls look just like built-in tools." |
| 9 | 4:10-4:25 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Agents can read files, run commands, and search code. But what about querying a database? Calling an external API? Checking a deployment status? That's what MCP servers provide - additional tools that extend what your agents can do.

### SECTION 1: The MCP Gallery (0:30-1:30)

**CAMTASIA ACTION**: Open Extensions view. Type `@mcp` in search. Browse available MCP servers.

> Open Extensions and type `@mcp`. This is the MCP server gallery. You'll see servers for databases, APIs, cloud providers, monitoring tools - each one adds new tools your agents can use.
>
> I'll install a SQLite MCP server so our agents can query the Tailspin Toys database directly.

**CAMTASIA ACTION**: Install the SQLite MCP server. Show the post-install configuration prompt.

> After installation, it asks for configuration - in our case, the path to our SQLite database. I'll point it to `data/tailspin-toys.db`.

### SECTION 2: Configuration (1:30-2:35)

**CAMTASIA ACTION**: Open `.vscode/mcp.json`. Show the server configuration.

> The config lives in `mcp.json`. Each server has a name, the command to start it, and any arguments. Our SQLite server gets the database path.
>
> The server exposes tools - `query`, `list_tables`, `describe_table`. These are the tools agents can now use.

**CAMTASIA ACTION**: Open an agent.md file. Show MCP tools referenced in the tools list.

> To give an agent access, add the MCP tools to its tools list in the frontmatter. Our architect agent now has `mcp_sqlite_query` alongside its existing tools. You control which agents get which MCP tools.

### SECTION 3: Live Demo (2:35-3:45)

**CAMTASIA ACTION**: Select the architect agent. Type: "What are the top 5 most-funded games on the platform? Analyze the data and suggest which categories we should expand." Watch it query the database and reason over the results.

> Now the agent can access real data. I'm asking it to analyze our most-funded games and suggest category expansion.
>
> Watch the tool calls - it first calls `list_tables` to understand the schema, then `describe_table` on the games and categories tables, then `query` with a SQL statement.
>
> It's reasoning over real data, not hallucinating. The answer includes specific game names, funding amounts, and data-driven category recommendations.

### SECTION 4: Debug Panel (3:45-4:10)

**CAMTASIA ACTION**: Open debug panel. Show MCP tool calls alongside regular tool calls.

> In the debug panel, MCP tool calls appear just like built-in tools. You can see the SQL query it sent and the result set it received. Full visibility, same as any other tool.

### OUTRO (4:10-4:25)

> MCP servers extend agents beyond files and code into databases, APIs, and external services. Install from the gallery or build your own. Next: MCP Apps for interactive UI. Branch below.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `video/A11-mcp-servers`
- [ ] SQLite MCP server available to install (or pre-installed)
- [ ] tailspin-toys.db has interesting data to query
- [ ] Agent file updated with MCP tools
- [ ] Pre-test the query to know what response looks like

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + diagram | 0:20 | Simple 3-box diagram |
| 2 | Browse @mcp gallery | 0:35 | Scroll through options |
| 3 | Install + configure SQLite MCP | 0:25 | Speed up installation |
| 4 | Walk through mcp.json | 0:35 | Zoom on config fields |
| 5 | Show agent with MCP tools | 0:30 | Zoom on tools list |
| 6 | Live demo: agent queries database | 1:10 | Speed up AI processing |
| 7 | Debug panel: MCP tool calls | 0:25 | Quick zoom |
| 8 | Outro | 0:15 | Template |

---

## Demo Repo Branch Spec

### Starting State (`video/A11-mcp-servers`)
```
- Full Tailspin Toys app with populated database
- .github/agents/architect.agent.md (without MCP tools initially)
- SQLite MCP server available for installation
```

### Ending State (`video/A11-complete`)
```
- .vscode/mcp.json (configured with SQLite server)
- .github/agents/architect.agent.md (updated with MCP tools)
```
