/**
 * @interface AwsLambdaHttpApiEvent
 * @template TQueryParams
 * @property {string} version
 * @property {string} routeKey
 * @property {string} rawPath
 * @property {string} rawQueryString
 * @property {AwsLambdaHeaders} headers
 * @property {TQueryParams} queryStringParameters
 * @property {string} body
 * @property {AwsLambdaRequestContext} requestContext
 * @property {boolean} isBase64Encoded
 */

/**
 * @typedef AwsLambdaHeaders
 * @property {string} accept
 * @property {string} accept-encoding
 * @property {string} accept-language
 * @property {string} content-length
 * @property {string} host
 * @property {string} upgrade-insecure-requests
 * @property {string} user-agent
 * @property {string} x-amzn-trace-id
 * @property {string} x-forwarded-for
 * @property {string} x-forwarded-port
 * @property {string} x-forwarded-proto
 */

/**
 * @typedef AwsLambdaRequestContext
 * @property {string} accountId
 * @property {string} apiId
 * @property {string} domainName
 * @property {string} domainPrefix
 * @property {AwsLambdaRequestHttp} http
 * @property {string} requestId
 * @property {string} routeKey
 * @property {string} stage
 * @property {string} time
 * @property {number} timeEpoch
 */

/**
 * @typedef AwsLambdaRequestHttp
 * @property {string} method
 * @property {string} path
 * @property {string} protocol
 * @property {string} sourceIp
 * @property {string} userAgent
 */

// ******************************************************

const Example_AwsLambdaHttpApiEvent = {
  "version": "2.0",
  "routeKey": "GET /",
  "rawPath": "/",
  "rawQueryString": "",
  "headers": {
    "accept": "",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "content-length": "0",
    "host": "bvtw2catj1.execute-api.us-east-1.amazonaws.com",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36",
    "x-amzn-trace-id": "Root=1-628456f3-75aca08146c4b9cf5757ed2e",
    "x-forwarded-for": "156.146.46.153",
    "x-forwarded-port": "443",
    "x-forwarded-proto": "https"
  },
  "requestContext": {
    "accountId": "099230886305",
    "apiId": "bvtw2catj1",
    "domainName": "bvtw2catj1.execute-api.us-east-1.amazonaws.com",
    "domainPrefix": "bvtw2catj1",
    "http": {
      "method": "GET",
      "path": "/",
      "protocol": "HTTP/1.1",
      "sourceIp": "156.146.46.153",
      "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36"
    },
    "requestId": "STKGDh4jIAMEP6w=",
    "routeKey": "GET /",
    "stage": "$default",
    "time": "18/May/2022:02:16:19 +0000",
    "timeEpoch": 1652840179304
  },
  "isBase64Encoded": false
};