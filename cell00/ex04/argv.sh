#!/bin/bash

if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  for arg in "$@"; do
    echo "$arg"
  done
fi

# chmod +x argv.sh
# ./argv.sh
# ls -1