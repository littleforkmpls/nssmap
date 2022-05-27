#!/bin/sh

# View the logs for the tf-wp-connector. Reference:
# https://www.serverless.com/framework/docs/providers/aws/cli-reference/logs

AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless logs --function tf-wp-connector $@