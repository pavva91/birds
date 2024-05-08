#!/bin/bash

# NOTE: Use absolute path
# substitute /absolute/path/to/repo/ with your own absolute path
# e.g. /home/youruser/github/birds/
ln -s /absolute/path/to/repo/githooks/pre-commit.sh /absolute/path/to/repo/.git/hooks/pre-commit
ln -s /absolute/path/to/repo/githooks/pre-push.sh /absolute/path/to/repo/.git/hooks/pre-push

