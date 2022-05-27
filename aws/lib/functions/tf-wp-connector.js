const { AwsConfig, TfConfig, WpConfig } = require('../constants/Config');
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
  try {

    /** @type {TypeformWebhookPayload} */
    const payload = parseJson(event.body);
    if (!payload) throw new HttpBadRequest('Payload is not JSON string');

    const response = payload?.form_response;
    if (!response) throw new HttpBadRequest('Body is missing form response');
    if (!response.answers) throw new HttpBadRequest('Body is missing response answers');

    // ******************************************************

    // Copy files from Typeform to a public AWS S3 bucket and
    // save the public URLs for later inserting into WordPress.

    const formId = response.form_id;
    const respId = response.token;
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
      const path = `${s3BasePath}/${getFilename(url)}`;
      const stream = await Typeform.getFileStream({...TfConfig, fileUrl: url});
      const result = await Aws.s3Upload({...AwsConfig, region, bucket, path, body: stream});
      publicUrls[answer.field.id] = result.Location;
    }

    // ******************************************************

    // Convert array of answers into a lookup map keyed by the
    // field ID so that it is easier to map the values to the
    // WordPress post body.

    /** @type {Record<string,TypeformAnswer>} */
    const answerMap = response.answers.reduce((map, answer) => {
      if (!answer?.field?.id) return map;
      map[answer.field.id] = answer;
      return map;
    }, {});

    // ******************************************************

    // Map the Typeform answers to WordPress post fields.

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
      const wpTags = await WordPress.getTags({...WpConfig});

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

    const result = await WordPress.createPost({...WpConfig, body});

    // ******************************************************

    // All done, respond with something positive

    return {
      statusCode: 200,
      body: JSON.stringify({ok: true, id: result.id})
    };

  } catch(e) {
    if (!e.status) console.error(e);
    return {
      statusCode: e.status || 500,
      body: JSON.stringify({error: e})
    }
  }
}