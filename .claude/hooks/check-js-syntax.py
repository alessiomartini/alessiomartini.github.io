#!/usr/bin/env python3
"""PostToolUse hook: after any Edit/Write, syntax-check touched .js files.

This repo has no build step, linter, or test suite (see CLAUDE.md) — `node
--check` is the only automated correctness signal available, so this hook
runs it automatically instead of relying on remembering to do it by hand.
Exit code 2 feeds stderr back to Claude and blocks the turn from moving on
until the syntax error is fixed.
"""
import json
import subprocess
import sys


def main() -> int:
    try:
        data = json.load(sys.stdin)
    except json.JSONDecodeError:
        return 0

    file_path = data.get("tool_input", {}).get("file_path", "")
    if not file_path.endswith(".js"):
        return 0

    result = subprocess.run(
        ["node", "--check", file_path], capture_output=True, text=True
    )
    if result.returncode != 0:
        sys.stderr.write(f"node --check failed for {file_path}:\n{result.stderr}")
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
