# Claude Code Instructions - Tailspin Toys

## Project

Game crowdfunding platform. Flask + SQLAlchemy backend, Astro + Svelte frontend, SQLite database.

## Commands

- Run tests: `pytest -v` (from project root)
- Start app: `./scripts/start-app.sh`
- Install deps: `./scripts/setup-env.sh`

## Patterns

- Models in `server/models/` with `to_dict()` method
- Routes in `server/routes/` as Flask Blueprints
- Tests in `server/tests/` using pytest fixtures
- Register blueprints in `server/app.py`
- Import models in `server/models/__init__.py`

## Rules

- Always run pytest after making backend changes
- Use type hints on all Python function signatures
- Follow existing code patterns exactly
- Do not modify `.env`, `.github/hooks/`, or `.github/workflows/`
