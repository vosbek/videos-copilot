#!/bin/bash
# Post-edit linting hook
# Runs the appropriate formatter after every file edit

FILE_PATH="$1"

if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# Get file extension
EXT="${FILE_PATH##*.}"

case "$EXT" in
    py)
        # Format Python files with black (if available)
        if command -v black &> /dev/null; then
            black --quiet "$FILE_PATH" 2>/dev/null
            echo "Formatted $FILE_PATH with black"
        fi
        ;;
    js|ts|jsx|tsx|svelte|astro)
        # Format JS/TS/Svelte files with prettier (if available)
        if command -v prettier &> /dev/null; then
            prettier --write "$FILE_PATH" 2>/dev/null
            echo "Formatted $FILE_PATH with prettier"
        elif [ -f "node_modules/.bin/prettier" ]; then
            node_modules/.bin/prettier --write "$FILE_PATH" 2>/dev/null
            echo "Formatted $FILE_PATH with prettier"
        fi
        ;;
    json)
        # Format JSON with prettier
        if command -v prettier &> /dev/null; then
            prettier --write "$FILE_PATH" 2>/dev/null
        fi
        ;;
esac

exit 0
