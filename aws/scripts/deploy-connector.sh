#!/bin/sh

AWS_SHARED_CREDENTIALS_FILE=.aws \
AWS_PROFILE=nssmap-serverless-cli \
npx serverless deploy function --function tf-wp-connector