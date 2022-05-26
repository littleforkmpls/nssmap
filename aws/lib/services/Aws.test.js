const { expect } = require('../../test');
const { readFileSync, createReadStream } = require('fs');
const { Readable, Stream } = require('stream');
const { resolve } = require('path');

const { Aws } = require('./Aws');

describe('services/Aws.js', () => {

  const profile = 'nssmap-tf-wp-connector';
  const bucket = process.env.AWS_PUBLIC_BUCKET;
  const region = process.env.AWS_PUBLIC_BUCKET_REGION;

  describe('s3Upload()', () => {

    const testfile = resolve(__dirname, '../../test/files/test.png');

    it.skip('should upload a file from a Buffer', async () => {
      // Write: will upload a test image to S3 bucket
      const body = readFileSync(testfile);
      const path = `test/test-buffer-${Date.now()}.png`;
      const result = await Aws.s3Upload({bucket, path, body, profile, region});
      await expect(result).to.have.property('Location');
      // console.log(result);
    });

    it.skip('should upload a file from a Stream', async () => {
      // Write: will upload a test image to S3 bucket
      const body = createReadStream(testfile);
      const path = `test/test-stream-${Date.now()}.png`;
      const result = await Aws.s3Upload({bucket, path, body, profile, region});
      await expect(result).to.have.property('Location');
      // console.log(result);
    });

  });

});