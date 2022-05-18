const { parseJson } = require('../utils/json');
const { HttpBadRequest } = require('../utils/errors');

/**
 *
 * @param {AwsLambdaHttpApiEvent} event
 * @returns {Promise<AwsLambdaHttpApiReturns>}
 */
module.exports = async (event) => {
  try {

    /** @type {TypeformWebhookPayload} */
    const body = parseJson(event.body);
    if (!body) throw new HttpBadRequest('body is not json string');

    console.log(`Form ID: %s`, body.form_response.form_id);

    return {
      statusCode: 200,
      body: JSON.stringify(
        {event},
        null,
        2
      ),
    };

  } catch(e) {
    return {
      statusCode: e.status || 500,
      body: JSON.stringify({error: e})
    }
  }
}