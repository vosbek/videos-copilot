---
description: "Review recent code changes for correctness, security, performance, and pattern adherence"
---

# Code Review

Review the recent changes in this project for:

## Checklist

### Correctness
- Does the code work as intended?
- Are edge cases handled?
- Do all tests pass?

### Security
- Any SQL injection risks (string concatenation in queries)?
- Input validation on all user-facing endpoints?
- No hardcoded secrets or credentials?
- Proper error handling that doesn't leak internals?

### Performance
- Any N+1 query patterns?
- Missing pagination on list endpoints?
- Unnecessary database calls?

### Pattern Adherence
- Follows existing Flask/SQLAlchemy patterns?
- Consistent naming conventions?
- Blueprint registered in app.py?
- Model imported in __init__.py?
- Tests follow existing test patterns?

## Output

Provide findings organized by severity (Critical, High, Medium, Low) with specific file:line references and recommended fixes.
