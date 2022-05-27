#!/bin/sh

# Deploy just the tf-wp-connector function (fast). Reference:
# https://www.serverless.com/framework/docs/providers/aws/cli-reference/deploy-function

NODE_ENV=prod \
AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless deploy function --function tf-wp-connector