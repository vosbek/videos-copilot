---
description: "Generate a complete Flask API endpoint with model, routes, tests, and registration"
---

# Add New API Endpoint

Generate a complete Flask REST API endpoint for the Tailspin Toys project.

## What I Need

Create the following for a new `{{resource_name}}` resource:

1. **SQLAlchemy Model** (`server/models/{{resource_name}}.py`)
   - Follow the pattern in `server/models/game.py`
   - Include a `to_dict()` method
   - Add type hints on all columns

2. **Flask Routes** (`server/routes/{{resource_name}}.py`)
   - Follow the pattern in `server/routes/games.py`
   - Full CRUD: GET (list), GET (single), POST, PUT, DELETE
   - Input validation on POST/PUT
   - Proper error handling and status codes

3. **Tests** (`server/tests/test_{{resource_name}}.py`)
   - Follow the pattern in `server/tests/test_games.py`
   - Cover: happy path, validation errors, 404 cases

4. **Registration**
   - Register blueprint in `server/app.py`
   - Import model in `server/models/__init__.py`

5. **Verify** - Run `pytest -v` and confirm all tests pass
