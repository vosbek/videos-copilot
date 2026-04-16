# Tailspin Toys - Agent Instructions

This file provides instructions for all AI agents working on this project (GitHub Copilot, Claude Code, Copilot CLI, and cloud agents).

## Project Overview

Tailspin Toys is a game crowdfunding platform with a Flask backend (SQLAlchemy + SQLite) and an Astro/Svelte frontend (Tailwind CSS).

## Architecture

```
server/           Flask backend
  models/         SQLAlchemy ORM models (inherit from shared db instance)
  routes/         API endpoints (Blueprint-based)
  middleware/     Request middleware (auth, validation)
  tests/          pytest unit tests
  utils/          Helpers and database utilities
client/           Astro + Svelte frontend
  src/components/ Reusable Svelte 5 components
  src/pages/      Astro page routes
  src/styles/     Tailwind CSS
data/             SQLite database
scripts/          Dev scripts (setup, start, test)
```

## Conventions

### Backend
- Python 3.10+ with type hints on all function signatures
- Flask blueprints for route organization
- SQLAlchemy models with `to_dict()` serialization
- RESTful URLs: `/resources` (collection), `/resources/<id>` (item)
- Input validation before database operations
- Consistent error responses: `{"error": "message"}`

### Frontend
- Svelte 5 runes (`$state`, `$derived`, `$effect`, `$props`)
- Tailwind CSS only (no custom CSS)
- Dark slate palette
- Loading, error, and empty state handling in every component

### Testing
- pytest for backend (run: `pytest -v`)
- Playwright for e2e (run: `npx playwright test`)
- Always run tests after making changes

### Git
- Descriptive commit messages
- One logical change per commit

## Scripts

- `scripts/setup-env.sh` - Install dependencies
- `scripts/run-server-tests.sh` - Run backend tests
- `scripts/start-app.sh` - Start both servers

## Do NOT Modify

- `.env` files (use config.py for new configuration)
- `.github/hooks/` (protected by team policy)
- `.github/workflows/` (CI/CD managed separately)
