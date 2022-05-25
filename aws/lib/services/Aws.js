const AwsS3 = require('@aws-sdk/client-s3');
const AwsStorage = require('@aws-sdk/lib-storage');
const AwsCreds = require('@aws-sdk/credential-provider-ini');
const mime = require('mime-types');

const Aws = module.exports.Aws = class {

  /**
   * @typedef AwsS3UploadOpts
   * @property {string} bucket    The bucket name where to upload the file
   * @property {string} path      The path where file should be placed, aka the S3 "Key"
   * @property {string} region    The AWS region where the bucket is located, ie "us-east-1"
   * @property {string} profile   The AWS credential profile, ie: "nssmap-tf-wp-connector"
   * @property {ReadableStream|Buffer} body  The contents or stream of a file to upload
   *
   */

  /**
   *
   * @param {AwsS3UploadOpts} opts
   * @returns {Promise<AwsS3.CompleteMultipartUploadCommandOutput|AwsS3.AbortMultipartUploadCommandOutput>}
   */
  static async s3Upload({bucket, path, profile, region, body } = {}) {
    const client = Aws.s3Client(profile, region);
    const upload = new AwsStorage.Upload({
      client,
      params: {
        Key: path,
        Body: body,
        Bucket: bucket,
        ContentType: mime.lookup(path) || 'application/octet-stream'
      }
    });
    return await upload.done();
  }

  /**
   *
   * @param {string} profile The AWS credential profile, ie: "nssmap-tf-wp-connector"
   * @param {string} region  The AWS region where the bucket is located, ie "us-east-1"
   * @returns {AwsS3.S3Client}
   */
  static s3Client(profile, region) {
    const credentials = AwsCreds.fromIni({profile});
    return new AwsS3.S3Client({region, credentials});
  }

}

