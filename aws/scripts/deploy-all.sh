#!/bin/sh

NODE_ENV=prod \
AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless deploy