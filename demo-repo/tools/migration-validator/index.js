#!/usr/bin/env node
/**
 * Migration Validator CLI Tool
 *
 * Built with the Copilot SDK. Validates database migration files
 * against project conventions before allowing merge.
 *
 * Usage: node tools/migration-validator/index.js [migration-file]
 *
 * Used in video G6 - Copilot SDK (real use case demo).
 */

const { CopilotSDK } = require("@github/copilot-sdk");
const fs = require("fs");
const path = require("path");

const SYSTEM_PROMPT = `You are a database migration validator for the Tailspin Toys project.
This project uses SQLite with SQLAlchemy ORM.

When validating a migration file, check for:
1. Both upgrade() and downgrade() functions exist
2. SQL syntax is valid for SQLite
3. Column types match SQLAlchemy model conventions
4. No destructive operations without explicit flags (DROP TABLE, DELETE)
5. Transaction safety (operations wrapped in try/except)
6. The corresponding SQLAlchemy model has been updated to match

Report any issues found with severity (CRITICAL, WARNING, INFO).
If the migration passes all checks, confirm it's safe to apply.`;

async function validateMigration(migrationPath) {
  if (!fs.existsSync(migrationPath)) {
    console.error(`File not found: ${migrationPath}`);
    process.exit(1);
  }

  const sdk = new CopilotSDK({ auth: "copilot" });
  const session = await sdk.createSession();

  const validator = session.createAgent({
    name: "migration-validator",
    systemPrompt: SYSTEM_PROMPT,
    tools: ["readFile", "search", "grep", "runTerminal"],
  });

  console.log(`Validating migration: ${migrationPath}\n`);

  const result = await validator.send(
    `Validate this database migration file: ${migrationPath}\n\n` +
      `Steps:\n` +
      `1. Read the migration file\n` +
      `2. Check for both upgrade() and downgrade() functions\n` +
      `3. Validate SQL syntax\n` +
      `4. Find the corresponding SQLAlchemy model and verify consistency\n` +
      `5. Check for destructive operations\n` +
      `6. Report your findings with severity levels`
  );

  console.log(result.text);

  // Exit with non-zero if critical issues found
  if (result.text.includes("CRITICAL")) {
    console.log("\n[FAIL] Critical issues found. Migration should not be applied.");
    process.exit(1);
  } else if (result.text.includes("WARNING")) {
    console.log("\n[WARN] Warnings found. Review before applying.");
    process.exit(0);
  } else {
    console.log("\n[PASS] Migration validated successfully.");
    process.exit(0);
  }

  await session.close();
}

// CLI entry point
const migrationFile = process.argv[2];
if (!migrationFile) {
  console.log("Usage: node tools/migration-validator/index.js <migration-file>");
  console.log("Example: node tools/migration-validator/index.js server/migrations/001_add_users.py");
  process.exit(1);
}

validateMigration(path.resolve(migrationFile));
