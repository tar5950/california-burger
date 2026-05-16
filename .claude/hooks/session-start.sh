#!/bin/bash
set -euo pipefail

# Only run setup in remote (Claude Code on the web) sessions.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(pwd)}"

# California Burger is a single-file static site (index.html with inline CSS/JS).
# There are no package managers, build steps, tests, or linters to set up.
# This hook reserves the slot so future tooling can be added without re-wiring.

# Sanity-check the expected entrypoint exists.
if [ ! -f index.html ]; then
  echo "session-start: WARNING - index.html not found at $(pwd)" >&2
fi

echo "session-start: static site ready (no dependencies to install)"
