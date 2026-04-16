---
name: db-migration
description: "Generates and validates database migration scripts for SQLAlchemy schema changes. Use when asked to create a migration, alter a database table, add/remove columns, or modify the database schema."
---

# Database Migration Skill

Generate safe, validated database migration scripts for SQLAlchemy schema changes.

## When to Use

Activate when the user asks to:
- Create a database migration
- Add, remove, or modify database columns
- Change table constraints or indexes
- Alter the database schema

## Migration Process

### Step 1: Analyze Current Schema

Read the current models in `server/models/` to understand the existing schema. Compare with what the migration needs to change.

### Step 2: Generate Migration Script

Create a migration file in `server/migrations/` (create directory if it doesn't exist):

```python
"""
Migration: [description]
Date: [auto-generated]
"""

import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'tailspin-toys.db')

def upgrade():
    """Apply the migration."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        # Migration SQL here
        cursor.execute("""
            ALTER TABLE table_name
            ADD COLUMN column_name TEXT DEFAULT NULL
        """)
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        conn.close()

def downgrade():
    """Reverse the migration."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        # Reverse SQL here (SQLite limitations apply)
        pass
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        conn.close()

if __name__ == '__main__':
    upgrade()
    print("Migration applied successfully.")
```

### Step 3: Validate

Before applying:
- Verify the migration SQL is syntactically correct
- Check that column types match the SQLAlchemy model
- Ensure a downgrade path exists (even if limited by SQLite)
- Backup the database file before applying

### Step 4: Update Model

After migration, update the corresponding SQLAlchemy model to match the new schema.

## Safety Rules

- ALWAYS include a downgrade function
- NEVER drop tables without explicit user confirmation
- ALWAYS backup the database before destructive operations
- Use transactions (already handled by the template)
