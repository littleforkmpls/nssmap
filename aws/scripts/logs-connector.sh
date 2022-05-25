#!/bin/sh

AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless logs --function tf-wp-connector $@