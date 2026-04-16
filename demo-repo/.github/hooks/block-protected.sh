#!/bin/bash
# Pre-edit blocking hook
# Denies modifications to protected files

FILE_PATH="$1"

if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# List of protected file patterns
PROTECTED_FILES=(
    ".env"
    ".env.local"
    ".env.production"
    "docker-compose.yml"
    "docker-compose.prod.yml"
    ".github/hooks/hooks.json"
    ".github/hooks/lint-on-edit.sh"
    ".github/hooks/block-protected.sh"
    ".github/hooks/auto-test.sh"
    ".github/copilot-instructions.md"
    ".github/workflows/"
)

# Check if the target file matches any protected pattern
for PATTERN in "${PROTECTED_FILES[@]}"; do
    if [[ "$FILE_PATH" == *"$PATTERN"* ]]; then
        echo "BLOCKED: '$FILE_PATH' is protected by team policy."
        echo "This file cannot be modified by agents."
        echo "Suggestion: Use a different configuration approach or ask a human to modify this file."
        exit 1
    fi
done

exit 0
