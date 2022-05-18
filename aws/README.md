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

#### Local Development

From the `/aws` folder:

1. `n auto`
2. `npm install`

#### Deployment

##### Setup AWS credentials

1. You need access and secret keys for the `nssmap-serverless-cli` user
2. `npx serverless config credentials -p aws -k <ACCESSKEY> -s <SECRETKEY>`

##### Deploy to AWS

1. `npm run deploy` (deploys entire CloudFormation stack, slow)
2. or `npm run connector-deploy` (deploys just the one function, fast)