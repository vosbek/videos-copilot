#!/bin/bash
# Post-edit test runner hook
# Runs pytest when Python source files are modified

FILE_PATH="$1"

if [ -z "$FILE_PATH" ]; then
    exit 0
fi

# Only run tests for Python source files (not test files themselves)
if [[ "$FILE_PATH" == server/*.py ]] && [[ "$FILE_PATH" != server/tests/* ]]; then
    echo "Source file modified: $FILE_PATH"
    echo "Running test suite..."

    # Run pytest with minimal output
    cd "$(git rev-parse --show-toplevel)" 2>/dev/null || cd "$(dirname "$0")/../.."

    if command -v pytest &> /dev/null; then
        pytest server/tests/ -v --tb=short 2>&1
        TEST_EXIT=$?

        if [ $TEST_EXIT -eq 0 ]; then
            echo "All tests passing."
        else
            echo "WARNING: Some tests are failing after this edit."
            echo "Review the failures above and consider fixing them."
        fi
    else
        echo "pytest not found. Install with: pip install pytest"
    fi
fi

exit 0
