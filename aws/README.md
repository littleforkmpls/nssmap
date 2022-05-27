# North Star Story Map - AWS Services

This folder contains the source code and `serverless` config for the NSSMap AWS services.

> * Serverless Docs: https://www.serverless.com/framework/docs
> * Serverless Repo: https://github.com/serverless/serverless
> * Serverless SDK: https://www.npmjs.com/package/serverless

## Typeform to WordPress Connector

The Typeform to WordPress Connector (`tf-wp-connector`) is an AWS Lambda function that is called by a 
Typeform webhook whenever a form response is submitted. 

The connector does a few things:

1. Copy files from private Typeform URLs to a public S3 bucket
2. Map Typeform answers to WordPress post fields (including tag id's)
3. Create a post in WordPress

#### Public Endpoint (only accepts POSTs)

> https://bvtw2catj1.execute-api.us-east-1.amazonaws.com/

### Development

#### Requirements

* `n` (https://www.npmjs.com/package/n)
* `direnv` (https://direnv.net/)

#### Setup Credentials

You will need:
* Keys for the AWS `nssmap-serverless-cli` user
* Keys for the AWS `nssmap-tf-wp-connector` user
* Username and application password for the WordPress site
* Bearer token for the Typeform account

AWS Serverless Creds
1. Copy `.aws.default` to `.aws`
2. Edit `.aws`, add API keys

Application Creds

1. Copy `.env.default` to `.env` (note: will throw direnv error)
2. Edit `.env`, add API keys
3. Run `direnv allow`

#### Install Dependencies

1. `n auto`
2. `npm install`

#### Tests

Tests are written in Mocha/Chai and include integration tests for third-party
services. Services are not mocked and real API calls are made to those services. 
Tests that mutate any remote data are skipped by default.

1. `npm run test` OR `npm run test:watch`


#### Logs

You can view remote logs from your terminal.

1. `npm run connector-logs` (show logs from the last hour)
2. `npm run connector-logs:tail` (stream logs as they come in)

#### Deployment

1. Slow option: `npm run deploy` (deploys entire Cloud stack)
2. Fast option: `npm run connector-deploy` (deploys just the one function)