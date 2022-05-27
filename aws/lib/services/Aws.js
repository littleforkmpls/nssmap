const AwsS3 = require('@aws-sdk/client-s3');
const AwsStorage = require('@aws-sdk/lib-storage');
const mime = require('mime-types');

const Aws = module.exports.Aws = class {

  /**
   * @typedef AwsClientCreds
   * @property {string} accessKey
   * @property {string} secretKey
   */

  /**
   * @typedef AwsS3ClientOpts
   * @property {AwsClientCreds} creds
   * @property {string} region The AWS region where the bucket is located, ie "us-east-1"
   */

  /**
   *
   * @param {AwsS3ClientOpts} opts
   * @returns {AwsS3.S3Client}
   */
  static s3Client(opts = {}) {
    const { creds, region } = opts;
    return new AwsS3.S3Client({region, credentials: {
      accessKeyId: creds?.accessKey     || '',
      secretAccessKey: creds?.secretKey || ''
    }});
  }

  // ******************************************************

  /**
   * @typedef AwsS3UploadOpts
   * @property {AwsClientCreds} creds
   * @property {string} region  The AWS region where the bucket is located, ie "us-east-1"
   * @property {string} bucket  The bucket name where to upload the file
   * @property {string} path    The path where file should be placed, aka the S3 "Key"
   * @property {ReadableStream|Buffer} body  The contents or stream of a file to upload
   *
   */

  /**
   *
   * @param {AwsS3UploadOpts} opts
   * @returns {Promise<AwsS3.CompleteMultipartUploadCommandOutput|AwsS3.AbortMultipartUploadCommandOutput>}
   */
  static async s3Upload(opts = {}) {
    const { creds, region, bucket, path, body } = opts;
    const client = Aws.s3Client({creds, region});
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

}

