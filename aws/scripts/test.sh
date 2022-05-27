#!/bin/sh

NODE_ENV=test \
npx mocha \
  --bail \
  --exit \
  --exclude node_modules \
  --slow 5000 \
  --timeout 20000 \
  "$@" \
  "./test/global.test.js" \
  "./lib/**/*.test.js"