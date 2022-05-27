#!/bin/sh

# Deploy the entire service stack (slow). Reference:
# https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy

NODE_ENV=prod \
AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless deploy