# North Star Story Map - AWS Infrastructure

This folder contains the `serverless` configuration for the following backend features.

## 1. Typeform to WordPress Connector

An AWS Lambda that is called by a Typeform webhook to copy entries into WordPress.

### Public Endpoint URLs

* dev:  https://bvtw2catj1.execute-api.us-east-1.amazonaws.com/
* prod: 

### Development

#### Requirements

* `n` (https://www.npmjs.com/package/n)
* `direnv` (https://direnv.net/)

#### Setup Credentials

AWS Creds
1. Copy `.aws.default` into `.aws`
2. Edit `.aws`, add API keys

Application Creds
1. Copy `.env.default` to `.env` (note: will throw direnv error)
2. Edit `.env`, add API keys
3. Run `direnv allow`

#### Local Development

1. `n auto`
2. `npm install`

#### Tests

Tests are written in Mocha/Chai and include integration tests for third-party
services. As such, real API calls are made to those services. Tests that mutate
any remote data are skipped by default.

1. `npm run test:once` OR `npm run test:watch`

#### Deployment

##### Setup AWS credentials

1. You need access and secret keys for the `nssmap-serverless-cli` user
2. `npx serverless config credentials -p aws -k <ACCESSKEY> -s <SECRETKEY>`

##### Deploy to AWS

1. `npm run deploy` (deploys entire CloudFormation stack, slow)
2. or `npm run connector-deploy` (deploys just the one function, fast)