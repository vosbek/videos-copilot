# Tailspin Toys - Advanced Copilot Demo Repo

This is the companion demo repository for the **Advanced GitHub Copilot Video Series**. It contains all the custom agents, skills, hooks, MCP configurations, eval test cases, and SDK examples demonstrated in the videos.

## Getting Started

### For Video Viewers

Each video has a branch you can check out to follow along:

```bash
# Clone the repo
git clone https://github.com/vosbek/copilot-taskmaster.git
cd copilot-taskmaster

# Check out a specific video's starting state
git checkout video/A1-custom-agent

# See the completed result
git checkout video/A1-complete
```

### Running the App

```bash
./scripts/setup-env.sh    # Install dependencies
./scripts/start-app.sh    # Start backend + frontend
```

Backend: http://localhost:5100
Frontend: http://localhost:4321

### Running Tests

```bash
pytest -v                           # Backend tests
cd client && npx playwright test    # E2E tests
```

## What's Included

### Custom Agents (`.github/agents/`)

| Agent | Role | Tools | Used In |
|-------|------|-------|---------|
| `security-reviewer` | OWASP-focused security auditor | Read-only | A1, A4b, A13 |
| `architect` | Coordinator that delegates to specialists | Read-only + subagents | A2, A11 |
| `implementer` | Writes code following patterns | Full edit | A2, A3, A13 |
| `reviewer` | Reviews for correctness and quality | Read-only | A2, A3, A13 |
| `planner` | Creates implementation plans with handoffs | Read-only + handoffs | A3 |
| `tdd-coordinator` | Enforces Red-Green-Refactor cycle | Read-only + subagents | A4a |
| `red` | Writes failing tests | Test files only | A4a |
| `green` | Makes tests pass with minimum code | Full source edit | A4a |
| `refactor` | Improves quality, reverts if tests break | Full edit | A4a |
| `review-coordinator` | Fans out to parallel reviewers | Read-only + subagents | A4b |
| `performance-reviewer` | N+1 queries, caching, complexity | Read-only | A4b |
| `accessibility-reviewer` | WCAG 2.1, ARIA, keyboard nav | Read-only | A4b |
| `ci-pipeline` | Orchestrates test + security + review | Full access + subagents | A13 |

### Agent Skills (`.github/skills/`)

| Skill | Purpose | Used In |
|-------|---------|---------|
| `api-endpoint-generator` | Scaffolds Flask CRUD endpoints | A5, A6 |
| `db-migration` | Generates validated migration scripts | A5 |
| `security-audit` | OWASP Top 10 security scan | A13, G7 |

### Hooks (`.github/hooks/`)

| Hook | Event | Purpose | Used In |
|------|-------|---------|---------|
| `lint-on-edit.sh` | postToolUse | Auto-formats after every edit | A7 |
| `block-protected.sh` | preToolUse | Blocks changes to .env, CI, hooks | A7 |
| `auto-test.sh` | postToolUse | Runs pytest when source changes | A7 |

### Instruction Files (`.github/instructions/`)

| File | Applies To | Purpose |
|------|-----------|---------|
| `flask-endpoint.instructions.md` | `server/routes/**/*.py` | Flask route conventions |
| `python-tests.instructions.md` | `server/tests/**/*.py` | Test conventions |
| `svelte.instructions.md` | `client/src/**/*.svelte` | Svelte 5 component conventions |

### Prompt Files (`.github/prompts/`)

| Prompt | Purpose |
|--------|---------|
| `add-endpoint.prompt.md` | Generate a complete Flask endpoint |
| `code-review.prompt.md` | Review code for quality and security |

### MCP Configuration (`.github/mcp/`)

| Server | Purpose | Used In |
|--------|---------|---------|
| SQLite | Query the Tailspin Toys database | A11 |

### Eval Test Cases (`evals/`)

| Skill | Cases | Purpose | Used In |
|-------|-------|---------|---------|
| `api-endpoint-generator` | 20 (12 positive, 8 negative) | Trigger accuracy testing | A6 |

### SDK Examples (`tools/`)

| Example | Language | Purpose | Used In |
|---------|---------|---------|---------|
| `minimal-agent.js` | Node.js | 10-line agent quickstart | G6 |
| `orchestration.js` | Node.js | Sub-agent orchestration | G6 |
| `migration-validator/` | Node.js | Real-world CLI tool | G6 |

### Cross-Tool Instructions

| File | Surfaces |
|------|----------|
| `AGENTS.md` | Copilot, Claude Code, Copilot CLI |
| `CLAUDE.md` | Claude Code specific |
| `.github/copilot-instructions.md` | VS Code, Copilot CLI, cloud agent |

## Video Series

See the full video list, scripts, and recording guides at: [videos-copilot](https://github.com/vosbek/videos-copilot)

## License

MIT - See [LICENSE](LICENSE) for details.
