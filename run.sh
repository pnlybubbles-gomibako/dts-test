#!/bin/sh
set -e

ROOT="$(cd $(dirname $0); pwd)"
items=("host" "dep" "dep-dep")

if [ $# -eq 0 ]; then
  echo "🍀  run.sh"
  echo "  - install  install packages"
  echo "  - test     run tests"
  echo "  - build    generate js files in lib/"
  echo "  - bundle   generate bundle.js"
  echo "  - all      run all above"
else
  tasks=()

  if [ "$1" = "install" ]; then
    tasks=("install" "run build")
  elif [ "$1" = "test" ]; then
    tasks=("test")
  elif [ "$1" = "build" -o "$1" = "bundle" ]; then
    tasks=("run $1")
  elif [ "$1" = "all" ]; then
    tasks=("install" "run build" "run bundle")
  fi

  for item in "${items[@]}"
  do
    echo "🍀  $ROOT/$item"
    cd "$ROOT/$item"
    for task in "${tasks[@]}"
    do
      yarn $task
    done
  done
fi
