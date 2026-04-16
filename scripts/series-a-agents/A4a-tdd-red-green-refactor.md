# A4a - TDD Red-Green-Refactor with Subagent Orchestration

> **Series**: Agents & Orchestration
> **Length**: 5 minutes
> **Difficulty**: Advanced
> **Demo Branch**: `video/A4a-tdd-subagents`
> **Complete Branch**: `video/A4a-complete`

---

## Overview

**What viewers learn**: How to build a TDD coordinator that enforces the red-green-refactor cycle using three specialized subagents with different tool permissions.

**Prerequisites**: A1, A2 (subagents)

**Key files touched**:
- `.github/agents/tdd-coordinator.agent.md`
- `.github/agents/red.agent.md`
- `.github/agents/green.agent.md`
- `.github/agents/refactor.agent.md`

---

## Storyboard

| # | Time | Visual | Action | Narration |
|---|------|--------|--------|-----------|
| 1 | 0:00-0:10 | Branded intro | Play intro | -- |
| 2 | 0:10-0:30 | Title card + TDD cycle diagram | Red -> Green -> Refactor loop | "We're encoding the TDD cycle into an agent orchestration." |
| 3 | 0:30-1:05 | Editor: tdd-coordinator.agent.md | Show coordinator config | "The coordinator enforces the sequence and delegates each phase." |
| 4 | 1:05-1:30 | Editor: red.agent.md | Show test-writing agent | "Red writes failing tests. It has test file access only." |
| 5 | 1:30-1:50 | Editor: green.agent.md | Show implementation agent | "Green makes them pass. Full source edit access." |
| 6 | 1:50-2:10 | Editor: refactor.agent.md | Show refactor agent | "Refactor improves quality. Tests must still pass." |
| 7 | 2:10-4:15 | Chat: live demo | Full TDD cycle on a real feature | "Let's add search functionality and watch the cycle." |
| 8 | 4:15-4:40 | Agent Flow Chart | Visualize the orchestration | "The flow chart shows the full cycle." |
| 9 | 4:40-4:55 | Outro | Summary + branch | -- |

---

## Full Script

### INTRO (0:00-0:30)

[Branded intro - 10s]

> Test-driven development has a strict cycle: write a failing test, make it pass, then refactor. Most developers know this but don't always follow it. What if your agent enforced it?
>
> We're building a TDD coordinator that uses three subagents - Red, Green, and Refactor - each with exactly the right tools for their job.

### SECTION 1: Agent Architecture (0:30-2:10)

**CAMTASIA ACTION**: Open `tdd-coordinator.agent.md`. Zoom into subagents list and instructions.

> The TDD coordinator is read-only. It cannot write code. Its only job is to plan, delegate in sequence, and verify the cycle was followed.
>
> Its subagents are Red, Green, and Refactor. The instructions are strict: "Always delegate to Red first. Do not delegate to Green until Red reports failing tests. Do not delegate to Refactor until Green reports all tests passing."

**CAMTASIA ACTION**: Open `red.agent.md`. Show tools list.

> The Red agent writes tests. It has `createFile` and `editFile` but only for the tests directory. It also has `runTerminal` so it can run the test suite to prove the tests fail. Its instructions: "Write tests that describe the expected behavior. Run them. Confirm they fail. Report the failure output."

**CAMTASIA ACTION**: Open `green.agent.md`. Show tools list.

> Green has full source edit access - it can modify any file in `server/`. Its job is simple: "Make the failing tests pass with the minimum code necessary. Do not add anything beyond what the tests require. Run tests to confirm they pass."

**CAMTASIA ACTION**: Open `refactor.agent.md`. Show tools and instructions.

> Refactor gets edit access to both source and tests. Its instructions: "Improve code quality - extract functions, rename for clarity, remove duplication. After every change, run the tests. If any test fails, revert your last change."

### SECTION 2: Live Demo (2:10-4:15)

**CAMTASIA ACTION**: Select TDD Coordinator. Type: "Add search functionality to the games API - users should be able to search games by title and filter by category." Watch the full cycle.

> Let's watch the full cycle. I'm asking for search functionality on our games API.
>
> The coordinator plans the feature, then delegates to Red.
>
> Red is writing tests: test_search_by_title, test_search_by_category, test_search_no_results. It runs pytest and - good - three failures. Red reports back.
>
> Now the coordinator delegates to Green. It sees the failing test output and starts implementing. A new search route, query parameter parsing, SQLAlchemy filters. It runs tests... all three pass. Green reports back.
>
> Now Refactor. It looks at what Green wrote and notices the query building logic is duplicated. It extracts a `build_search_query` helper, renames a variable for clarity, and adds a comment for the filter logic. Runs tests - still passing. Reports back.
>
> The coordinator summarizes: "TDD cycle complete. 3 tests written, all passing. Implementation refactored for clarity."

### SECTION 3: Flow Chart (4:15-4:40)

**CAMTASIA ACTION**: Open Agent Flow Chart view. Show the orchestration graph with coordinator at top, delegation arrows to Red, Green, Refactor in sequence.

> Open the Agent Flow Chart and you can see the entire cycle visualized. Coordinator at the top, sequential delegations to each subagent, results flowing back up. You can click any node to see the details.

### OUTRO (4:40-4:55)

> TDD enforced by architecture, not discipline. Red, Green, Refactor - each with exactly the right permissions. Try it yourself on the branch below.
>
> Next: parallel fan-out for multi-perspective code review.

[Branded outro]

---

## Camtasia Recording Checklist

### Pre-Recording Setup
- [ ] Check out: `git checkout video/A4a-tdd-subagents`
- [ ] All four agent files in place
- [ ] No search endpoint exists yet (that's what we're building)
- [ ] Tests passing in current state (baseline clean)
- [ ] Pre-test the full cycle to estimate timing

### Recording Task Order

| Take | What to Record | Duration | Notes |
|------|---------------|----------|-------|
| 1 | Intro + TDD cycle diagram | 0:20 | Use classic red/green/blue diagram |
| 2 | Walk through tdd-coordinator.agent.md | 0:35 | Zoom on sequence enforcement |
| 3 | Walk through red.agent.md | 0:25 | Highlight test-only permissions |
| 4 | Walk through green.agent.md | 0:20 | Highlight source access |
| 5 | Walk through refactor.agent.md | 0:20 | Highlight revert instruction |
| 6 | Live demo - full TDD cycle | 2:05 | Speed up AI thinking. Longest take. |
| 7 | Agent Flow Chart view | 0:25 | Pan through the graph |
| 8 | Outro | 0:15 | Template |

### Post-Recording
- [ ] TDD cycle diagram overlay (persistent during agent walkthrough)
- [ ] Color-code: red tint on Red section, green tint on Green, blue on Refactor
- [ ] Speed up AI processing in demo (3-4x)
- [ ] Callout when tests fail (RED) and pass (GREEN)
- [ ] Zoom into flow chart nodes

---

## Demo Repo Branch Spec

### Starting State (`video/A4a-tdd-subagents`)
```
- .github/agents/tdd-coordinator.agent.md
- .github/agents/red.agent.md
- .github/agents/green.agent.md
- .github/agents/refactor.agent.md
- Full Tailspin Toys app with games CRUD (no search)
- Existing tests passing
```

### Ending State (`video/A4a-complete`)
```
All starting state PLUS:
- server/routes/games.py (updated with search route + build_search_query helper)
- server/tests/test_search.py (3 new tests)
```
