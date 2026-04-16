---
applyTo: "server/tests/**/*.py"
---

# Python Test Conventions

When writing tests in this project:

- Use pytest (not unittest)
- Use fixtures for test client setup
- Test both happy path and error cases
- Include tests for: GET collection, GET single, POST valid, POST invalid, PUT, DELETE, 404 cases
- Use descriptive test names: `test_<action>_<scenario>`
- Run `pytest -v` after writing to verify all tests pass
- Place test files in `server/tests/` with naming pattern `test_<resource>.py`
