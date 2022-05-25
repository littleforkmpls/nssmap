#!/bin/sh

AWS_SHARED_CREDENTIALS_FILE=.aws \
npx mocha \
  --bail \
  --exit \
  --exclude node_modules \
  --slow 5000 \
  --timeout 20000 \
  "$@" \
  "./test/global.test.js" \
  "./lib/**/*.test.js"