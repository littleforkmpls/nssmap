const { expect } = require('../../test');

const { TfWpConnector } = require('./tf-wp-connector');
const { Example_TypeformWebhookPayload } = require('../../types/TypeformWebhookPayload');

describe('functions/tf-wp-connector.js', () => {

  /** @type {TypeformWebhookPayload} */
  let payload;

  /** @type {string} */
  let body;

  beforeEach(() => {
    // quick and dirty "copy" so we dont modify the original.
    payload = JSON.parse(JSON.stringify(Example_TypeformWebhookPayload));
    body = JSON.stringify(payload);
  });

  it('should return 400 status if payload is invalid', async () => {
    const result = await TfWpConnector({});
    await expect(result.statusCode).to.eq(400);
  });

  it.only('should return 200 status if payload is valid', async () => {
    // Write: uploads a set of images to the public S3 bucket
    const result = await TfWpConnector({body});
    await expect(result.statusCode).to.eq(200);
  });

});