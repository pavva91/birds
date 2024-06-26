#!/bin/bash

# ts
echo "Pre-commit Git Hook: Format (prettier) staged ts files"

STAGED_TS_FILES=$(git diff --cached --name-only -- '*.ts')

if [ "$STAGED_TS_FILES" '==' "" ]; then
	echo "No TS Files to Update"
else
	echo "Run formatter (prettier)"
	for ts_file in $STAGED_TS_FILES; do
		npx prettier "$ts_file" --write
		git add "$ts_file"
	done

	echo "Run linter (eslint)"
	for ts_file in $STAGED_TS_FILES; do
		npx eslint "$ts_file" --fix
		echo "$ts_file"
		git add "$ts_file"
	done
fi

# TODO: go
# TODO: java
