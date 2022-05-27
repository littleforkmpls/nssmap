const { AwsCfg, TfCfg, WpCfg } = require('../constants/Config');
const { TypeformToWordPressMap } = require('../constants/TypeformToWordPressMap');

const { Aws } = require('../services/Aws');
const { Typeform } = require('../services/Typeform');
const { WordPress } = require('../services/WordPress');
const { HttpBadRequest } = require('../utils/errors');
const { getFilename } = require('../utils/url');
const { parseJson } = require('../utils/json');
const { uid } = require('../utils/uid');
const set = require('lodash.set');

/**
 *
 * @param {AwsLambdaHttpApiEvent} event
 * @returns {Promise<AwsLambdaHttpApiReturns>}
 */
module.exports.TfWpConnector = async (event) => {

  const { sourceIp, userAgent } = event?.requestContext?.http || {};
  console.info(`Request from: ${sourceIp} (${userAgent})`);

  try {

    /** @type {TypeformWebhookPayload} */
    const payload = parseJson(event.body);
    if (!payload) throw new HttpBadRequest('Request body is not JSON');

    const response = payload?.form_response;
    if (!response) throw new HttpBadRequest('Payload is missing form response');
    if (!response.answers) throw new HttpBadRequest('Payload is missing response answers');

    // ******************************************************

    // Make sure this response is for the form we care about.
    // If it's not, exit early with a 200 ok status.

    const formId = response.form_id;
    const respId = response.token;

    console.info(`Form: ${formId}, Response: ${respId}`);

    if (formId !== process.env.TYPEFORM_FORM_ID) {
      return { statusCode: 200, body: '' };
    }

    // ******************************************************

    // Copy files from Typeform to a public AWS S3 bucket and
    // save the public URLs for later inserting into WordPress.

    const YYYYMM = (new Date()).toISOString().substring(0,7);
    const s3BasePath = `tf-responses/${formId}/${YYYYMM}/${respId}`;

    const bucket = process.env.AWS_PUBLIC_BUCKET;
    const region = process.env.AWS_PUBLIC_BUCKET_REGION;

    /** @type {Record<string,string>} */
    const publicUrls = {};

    for (let i in response.answers) {
      /** @type {TypeformAnswer} */
      const answer = response.answers[i];
      if (answer.type !== 'file_url') continue;

      const url = answer.file_url;
      const path = `${s3BasePath}/${uid(5)}-${getFilename(url)}`;
      const stream = await Typeform.getFileStream({...TfCfg, fileUrl: url});
      if (!stream) continue;

      const result = await Aws.s3Upload({...AwsCfg, region, bucket, path, body: stream});
      publicUrls[answer.field.id] = result.Location;
    }

    // ******************************************************

    // Map the Typeform answers to WordPress fields.

    /** @type {NssmapFormResponsePost} */
    const body = {
      acf: {
        response_id:   response.token,
        response_time: response.submitted_at,
        story_state:  'MN',
      }
    };

    for (let i in response.answers) {
      /** @type {TypeformAnswer} */
      const answer = response.answers[i];
      const id = answer.field.id;
      const type = answer.type;

      const key = TypeformToWordPressMap[id];
      if (!key) continue; // skip answers not in the map

      let value = Typeform.getAnswerValue(answer);

      if (type === 'boolean')  value = value ? 'yes' : 'no';
      if (type === 'choices')  value = Object.values(value).join(',');
      if (type === 'file_url') value = publicUrls[id] || '';

      set(body, key, String(value));
    }

    // ******************************************************

    // Map tags from Typeform to the WordPress tag IDs.

    if (body.tags) {

      /** @type {WordPressTag[]} */
      const wpTags = await WordPress.getTags({...WpCfg});

      /** @type {{}|Record<string,number>} */
      const tagIdMap = wpTags.reduce((map, tag) => {
        map[tag.name] = tag.id;
        return map;
      }, {});

      body.tags = body.tags.split(',').map(tagStr => {
        return tagIdMap[tagStr] || tagIdMap['Other'];
      }).filter(Boolean).join(',');
    }

    // ******************************************************

    // Finally create the post in WordPress

    const result = await WordPress.createPost({...WpCfg, body});

    // ******************************************************

    // All done, respond with something positive

    console.info(`Created post: ${result.id}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ok: true, id: result.id})
    };

  } catch(e) {
    console.error((e.status) ? e.toString() : e);
    return {
      statusCode: e.status || 500,
      body: JSON.stringify({error: e})
    }
  }
}