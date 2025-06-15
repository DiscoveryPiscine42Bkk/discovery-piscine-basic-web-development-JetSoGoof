#!/bin/bash

# Check if no argument are supplied
if [ $# -eq 0 ]; then
  echo "No arguments supplied"
  exit1
fi

# Create dirrectories with prefix "ex"
  for arg in "$@"; do
    mkdir -p "ex$arg"
  done
