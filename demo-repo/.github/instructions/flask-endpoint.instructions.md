---
applyTo: "server/routes/**/*.py"
---

# Flask Endpoint Conventions

When writing Flask route handlers in this project:

- Use Blueprint-based route organization
- Include type hints on all function parameters and return values
- Return `tuple` type (jsonify response + status code)
- Use `get_or_404()` for single-resource lookups
- Validate request data before processing
- Use consistent HTTP status codes: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found)
- Register all new blueprints in `server/app.py`
- Follow RESTful URL patterns: `/resources` (collection), `/resources/<id>` (item)
