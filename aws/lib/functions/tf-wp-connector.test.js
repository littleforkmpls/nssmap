const { expect } = require('../../test');

const { TfWpConnector } = require('./tf-wp-connector');
const { Example_TypeformWebhookPayload } = require('../../types/TypeformWebhookPayload');

describe('functions/tf-wp-connector.js', () => {

  /** @type {TypeformWebhookPayload} */
  let payload = Example_TypeformWebhookPayload;

  // ******************************************************

  it('should return 400 status if payload is invalid', async () => {
    const result = await TfWpConnector({});
    await expect(result.statusCode).to.eq(400);
  });

  it.skip('should return 200 status with new post ID if payload is valid', async () => {

    // Write: uploads a set of images to the public files S3 bucket:
      // https://s3.console.aws.amazon.com/s3/buckets/nssmap-public-file-storage?region=us-east-1&prefix=tf-responses/test/&showversions=false

    // Write: creates a WordPress post with title "Test of a test"
      // https://nssmapstage.wpengine.com/wp-admin/edit.php

    const body = JSON.stringify(payload);
    const result = await TfWpConnector({body});
    await expect(result.statusCode).to.eq(200);
    const resultBody = JSON.parse(result.body);
    await expect(resultBody.id).to.be.a('number').that.is.greaterThan(0);
  });

});