#!/bin/sh

npx mocha \
  --bail \
  --exit \
  --exclude node_modules \
  --slow 2000 \
  --timeout 10000 \
  "$@" \
  "./test/global.test.js" \
  "./lib/**/*.test.js"