---
name: security-audit
description: "Performs a comprehensive security audit of Python/Flask web applications checking for OWASP Top 10 vulnerabilities, hardcoded secrets, insecure configurations, and dependency vulnerabilities. Use when asked to audit, scan, or check the security of the application."
---

# Security Audit Skill

Perform a comprehensive security audit following the OWASP Top 10 framework.

## Audit Procedure

### 1. Injection (A03:2021)

Search for SQL injection:
```bash
grep -rn "execute\|raw\|text(" server/ --include="*.py" | grep -v "test"
grep -rn "f\".*SELECT\|f\".*INSERT\|f\".*UPDATE\|f\".*DELETE" server/ --include="*.py"
```

Check for command injection:
```bash
grep -rn "os.system\|subprocess.call\|subprocess.Popen\|eval(" server/ --include="*.py"
```

### 2. Authentication (A07:2021)

- Check JWT configuration (expiry, algorithm, secret strength)
- Verify password hashing (bcrypt/argon2, not MD5/SHA1)
- Check session management
- Look for hardcoded credentials

### 3. Sensitive Data Exposure (A02:2021)

```bash
grep -rn "password\|secret\|api_key\|token\|private_key" --include="*.py" --include="*.js" --include="*.json" | grep -v node_modules | grep -v ".git"
```

- Check .gitignore includes `.env`, `*.db`, credentials files
- Verify error responses don't leak stack traces
- Check for verbose debug mode in production config

### 4. Security Misconfiguration (A05:2021)

- Check CORS settings
- Verify debug mode is off in production
- Check for default credentials
- Review HTTP security headers (HSTS, X-Frame-Options, CSP)

### 5. Rate Limiting

- Check if sensitive endpoints (login, register, password reset) have rate limiting
- Check if API endpoints have any request throttling

### 6. Input Validation

- Verify all user inputs are validated before processing
- Check for proper content-type validation
- Verify file upload restrictions if applicable

## Report Format

```
# Security Audit Report

## Executive Summary
- Risk Level: CRITICAL / HIGH / MEDIUM / LOW
- Findings: X total (X critical, X high, X medium, X low)

## Findings

### [CRITICAL/HIGH/MEDIUM/LOW] Finding Title
- **Category**: OWASP category
- **Location**: file:line
- **Evidence**: code snippet
- **Impact**: what could happen
- **Remediation**: how to fix

## Recommendations
Prioritized list of actions.
```
