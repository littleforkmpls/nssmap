
module.exports.EnvCfg = {
  isLocal: process.env.NODE_ENV === 'local',
  isTest:  process.env.NODE_ENV === 'test',
  isProd:  process.env.NODE_ENV === 'prod'
}

module.exports.AwsCfg = {
  creds: {
    accessKey: process.env.AWS_TF_WP_ACCESS_KEY,
    secretKey: process.env.AWS_TF_WP_SECRET_KEY
  }
};

module.exports.TfCfg = {
  baseUrl: process.env.TYPEFORM_URL,
  token: process.env.TYPEFORM_TOKEN,
};

module.exports.WpCfg = {
  baseUrl: process.env.WORDPRESS_URL,
  creds: {
    username: process.env.WORDPRESS_USERNAME,
    password: process.env.WORDPRESS_PASSWORD
  }
};