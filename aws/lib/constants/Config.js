
module.exports.AwsConfig = {
  creds: {
    accessKey: process.env.AWS_TF_WP_ACCESS_KEY,
    secretKey: process.env.AWS_TF_WP_SECRET_KEY
  }
};

module.exports.TfConfig = {
  baseUrl: process.env.TYPEFORM_URL,
  token: process.env.TYPEFORM_TOKEN,
};

module.exports.WpConfig = {
  baseUrl: process.env.WORDPRESS_URL,
  creds: {
    username: process.env.WORDPRESS_USERNAME,
    password: process.env.WORDPRESS_PASSWORD
  }
};