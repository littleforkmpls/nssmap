const fetch = require('node-fetch');
const { HttpError } = require('../utils/errors');
const { buildQueryString, urlJoin } = require('../utils/url');

module.exports.Typeform = class Typeform {

  /**
   *
   * @param {TypeformAnswer} answer
   * @returns {boolean|string|number|Record<string,string>}
   */
  static getAnswerValue(answer) {
    switch (answer.type) {
      case 'boolean':
        return answer.boolean;
      case 'choice':
        return {[answer.choice.id]: answer.choice.label};
      case 'choices':
        if (Array.isArray(answer.choices.labels)) {
          return answer.choices.labels.reduce((map, label, i) => {
            map[i] = label;
            return map;
          }, {});
        }
        if (answer.choices.ids) {
          return answer.choices.ids.reduce((map, id, i) => {
            map[id] = (id === 'other')
              ? answer.choices.other
              : answer.choices.labels[i];
            return map;
          }, {});
        }
        return {};
      case 'email':
        return answer.email;
      case 'file_url':
        return answer.file_url;
      case 'number':
        return answer.number;
      case 'text':
        return answer.text;
      case 'url':
        return answer.url;
    }
  }

  // ******************************************************

  /**
   * @typedef TypeformGetResponsesOpts
   * @property {string} baseUrl
   * @property {string} formId
   * @property {string} token
   * @property {TypeformGetResponsesQueryParams} [query]
   */

  /**
   *
   * @param {TypeformGetResponsesOpts} opts
   * @returns {Promise<TypeformResponse[]>}
   */
  static async getResponses(opts = {}) {
    const { baseUrl, formId, token, query } = opts;
    const path = `/forms/${formId || ''}/responses`;
    /** @type {TypeformApiGetResponses} */
    const result = await Typeform.request({baseUrl, path, token, query});
    if (!result || !result.items) throw new Error('Response invalid');
    return result.items;
  }


  // ******************************************************

  /**
   * @typedef TypeformGetFileOpts
   * @property {string} fileUrl
   * @property {string} token
   */

  /**
   *
   * @param {TypeformGetFileOpts} opts
   * @returns {Promise<Buffer>}
   */
  static async getFileContents(opts = {}) {
    const { fileUrl, token } = opts;
    try {
      return await Typeform.request({baseUrl: fileUrl, token, type: 'buffer'});
    } catch(e) {
      console.warn(`Cannot retrieve Typeform file contents: ${fileUrl}: ${e}`);
      return null;
    }
  }

  /**
   *
   * @param {TypeformGetFileOpts} opts
   * @returns {Promise<Stream>}
   */
  static async getFileStream(opts = {}) {
    const { fileUrl, token } = opts;
    try {
      return await Typeform.request({baseUrl: fileUrl, token, type: 'stream'});
    } catch(e) {
      console.warn(`Cannot retrieve Typeform file contents: ${fileUrl}: ${e}`);
      return null;
    }
  }

  // ******************************************************
  // ******************************************************
  // ******************************************************

  /**
   * @typedef TypeformRequestOpts
   * @property {string} baseUrl
   * @property {string} [path]
   * @property {any} [body]
   * @property {string} [token]
   * @property {string} [method]
   * @property {Record<string,any>} [query]
   * @property {"buffer"|"json"|"stream"|"text"} [type] Defaults to "json"
   */

  /**
   *
   * @param {TypeformRequestOpts} opts
   * @returns {Promise<*>}
   */
  static async request(opts = {}) {

    const {
      method = 'GET',
      baseUrl,
      token,
      path,
      body,
      query,
      type
    } = opts;

    let url = urlJoin(baseUrl, path) || '';
    if (query) url += buildQueryString(query);

    /** @type {RequestInit} */
    const params = { method, headers: {} };

    if (body) {
      params.body = JSON.stringify(body);
      params.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }

    if (token) {
      params.headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(url, params);
    const { status, statusText } = response;

    if (status >= 400) {
      let code, msg;
      try {
        const json = await response.json();
        msg = json.description || '';
        code = json.code || '';
      } catch(e) {
        msg = statusText;
      }
      throw new HttpError(msg, status, code);
    }

    switch (type) {
      case 'buffer':
        return await response.buffer();
      case 'stream':
        return response.body;
      case 'text':
        return await response.text();
      case 'json':
      default:
        return await response.json();
    }
  }

}