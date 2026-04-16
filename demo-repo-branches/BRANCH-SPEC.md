# Demo Repo Branch Specification

Every video has two branches in the demo repo (fork of Tailspin Toys):
- `video/[ID]-[slug]` - **Starting state** the viewer checks out to follow along
- `video/[ID]-complete` - **Finished state** showing the completed result

## Branch Creation Script

Run from the demo repo root to create all branches:

```bash
#!/bin/bash
# Create all video branches from main

BASE="main"

# Phase 1: Foundation
git checkout $BASE && git checkout -b video/A1-custom-agent
# Remove .github/agents/ contents (viewer creates the agent live)
rm -f .github/agents/security-reviewer.agent.md
git add -A && git commit -m "A1 starting state: empty agents directory"

git checkout $BASE && git checkout -b video/A1-complete
# Copy in the completed security-reviewer.agent.md
git add -A && git commit -m "A1 complete: security reviewer agent"

# Repeat for each video...
```

## Branch Inventory

### Phase 1: Foundation

| Video | Start Branch | What's Different from Main | End Branch | What's Added |
|-------|-------------|---------------------------|------------|-------------|
| A1 | `video/A1-custom-agent` | `.github/agents/` is empty | `video/A1-complete` | `security-reviewer.agent.md` |
| A5 | `video/A5-skill-creation` | `.github/skills/` is empty | `video/A5-complete` | `api-endpoint-generator/SKILL.md` |
| A9 | `video/A9-debug-panel` | Agents + skills from A1/A5 + one broken skill | `video/A9-complete` | Fixed skill description |

### Phase 2: Orchestration

| Video | Start Branch | What's Different from Main | End Branch | What's Added |
|-------|-------------|---------------------------|------------|-------------|
| A2 | `video/A2-subagent-orchestration` | architect + implementer + reviewer agents, NO categories endpoint | `video/A2-complete` | categories model/route/tests |
| A3 | `video/A3-agent-handoffs` | planner + implementer (w/handoff) + reviewer agents, NO auth | `video/A3-complete` | auth middleware + user model |
| A7 | `video/A7-hooks` | hooks.json + scripts in place, NO input validation on games | `video/A7-complete` | games validation + config.py |

### Phase 3: Advanced Patterns

| Video | Start Branch | What's Different from Main | End Branch | What's Added |
|-------|-------------|---------------------------|------------|-------------|
| A4a | `video/A4a-tdd-subagents` | TDD agents (coordinator/red/green/refactor), NO search | `video/A4a-complete` | search route + tests |
| A4b | `video/A4b-parallel-review` | Review coordinator + 3 reviewers, code has intentional issues | `video/A4b-complete` | Review report (saved as .md) |
| A6 | `video/A6-skill-evals` | Unoptimized skill + eval cases, empty results/ | `video/A6-complete` | Optimized skill + HTML reports |
| A10 | `video/A10-flow-chart` | All agents from A4a + A4b | `video/A10-complete` | Same (observational) |

### Phase 4: Integration & CLI

| Video | Start Branch | What's Different from Main | End Branch | What's Added |
|-------|-------------|---------------------------|------------|-------------|
| A8 | `video/A8-agent-plugins` | All customizations from previous videos | `video/A8-complete` | Plugin repo structure |
| A11 | `video/A11-mcp-servers` | Architect agent without MCP tools | `video/A11-complete` | mcp.json + updated agent |
| A12 | `video/A12-mcp-apps` | MCP App server code in tools/ | `video/A12-complete` | Same (demo is observational) |
| A13 | `video/A13-cicd-pipeline` | CI pipeline agents + feature branch with issues | `video/A13-complete` | Review report |
| A14 | `video/A14-instructions-scale` | All instruction layers in place | `video/A14-complete` | Same (architecture overview) |
| F1 | `video/F1-cli-modes` | Full app, games without pagination | `video/F1-complete` | Pagination added |
| F2 | `video/F2-fleet` | Full app, NO publishers feature | `video/F2-complete` | Full publishers feature |
| F3 | `video/F3-cli-customization` | All customizations + AGENTS.md | `video/F3-complete` | Installed plugin |
| F5 | `video/F5-context-sessions` | Full app with session history | `video/F5-complete` | Same (feature demo) |

### Phase 5: Latest Features & Capstone

| Video | Start Branch | What's Different from Main | End Branch | What's Added |
|-------|-------------|---------------------------|------------|-------------|
| G1 | `video/G1-copilot-memory` | Full app with memory enabled | `video/G1-complete` | Same (feature demo) |
| G2 | `video/G2-cloud-agent` | Full app + conflicted PR branch | `video/G2-complete` | WebSocket branch + resolved PR |
| G3 | `video/G3-agentic-review` | PR with 5+ type hint issues, 3+ error handling issues | `video/G3-complete` | Batch autofix commit |
| G4 | `video/G4-autopilot-browser` | GameDetails with null publisher bug | `video/G4-complete` | Fixed component |
| G5 | `video/G5-rubber-duck` | Full app, NO rate limiting | `video/G5-complete` | Rate limiting middleware |
| G6 | `video/G6-copilot-sdk` | SDK examples in tools/ | `video/G6-complete` | Same (walkthrough) |
| G7 | `video/G7-security-pipeline` | GitHub issue for CSV export | `video/G7-complete` | Validated CSV export PR |
| BONUS | N/A | N/A (case study, no demo branch) | N/A | N/A |

## Micro-Video Branches

Most micro-videos use the same branch as their parent full video. Only these need dedicated branches:

| Micro | Branch | Based On |
|-------|--------|----------|
| MICRO-01 | `micro/create-agent` | Same as A1 start |
| MICRO-05 | `micro/create-skill` | Same as A5 start |
| MICRO-07 | `micro/skill-debug` | A9 start (broken skill) |
| MICRO-13 | `micro/lint-hook` | A7 start |
| MICRO-14 | `micro/block-hook` | A7 start |
| MICRO-15 | `micro/auto-test` | A7 start |
| MICRO-18 | `micro/handoff-buttons` | A3 start |
| MICRO-20 | `micro/install-mcp` | A11 start |
| MICRO-22 | `micro/run-eval` | A6 start |
| MICRO-26 | `micro/fleet` | F2 start |
| MICRO-43 | `micro/sdk-quickstart` | G6 start |

All other micro-videos are recorded against the full video's branch or don't need a branch at all.
