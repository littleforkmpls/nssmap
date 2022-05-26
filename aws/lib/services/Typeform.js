const fetch = require('node-fetch');
const { Readable } = require('stream');
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
        return answer.choices.ids.reduce((map, id, i) => {
          map[id] = (id === 'other')
            ? answer.choices.other
            : answer.choices.labels[i];
          return map;
        }, {});
      case 'email':
        return answer.email;
      case 'file_url':
        return answer.file_url;
      case 'number':
        return answer.number;
      case 'text':
      case 'short_text':
      case 'long_text':
        return answer.text;
      case 'url':
        return answer.url;
    }
  }

  // ******************************************************

  /**
   * @typedef TypeformGetResponsesOpts
   * @property {string} formId
   * @property {string} token
   * @property {TypeformGetResponsesQueryParams} [query]
   */

  /**
   *
   * @param {string} apiUrl
   * @param {TypeformGetResponsesOpts} opts
   * @returns {Promise<TypeformResponse[]>}
   */
  static async getResponses(apiUrl, {formId, token, query} = {}) {
    const path = `/forms/${formId || ''}/responses`;
    /** @type {TypeformApiGetResponses} */
    const result = await Typeform.request(apiUrl, {path, token, query});
    if (!result || !result.items) throw new Error('Response invalid');
    return result.items;
  }


  // ******************************************************

  /**
   * @typedef TypeformGetFileOpts
   * @property {string} token
   */

  /**
   *
   * @param {string} fileUrl
   * @param {TypeformGetFileOpts} opts
   * @returns {Promise<Buffer>}
   */
  static async getFileContents(fileUrl, {token} = {}) {
    return await Typeform.request(fileUrl, {token, type: 'buffer'});
  }

  /**
   *
   * @param {string} fileUrl
   * @param {TypeformGetFileOpts} opts
   * @returns {Promise<Stream>}
   */
  static async getFileStream(fileUrl, {token} = {}) {
    return await Typeform.request(fileUrl, {token, type: 'stream'});
  }

  // ******************************************************
  // ******************************************************
  // ******************************************************

  /**
   * @typedef TypeformQueryOpts
   * @property page_size
   * @property page_size
   */

  /**
   * @typedef TypeformRequestOpts
   * @property {string} [path]
   * @property {any} [body]
   * @property {string} [token]
   * @property {string} [method]
   * @property {Record<string,any>} [query]
   * @property {"buffer"|"json"|"stream"|"text"} [type] Defaults to "json"
   */

  /**
   *
   * @param {string} apiUrl
   * @param {TypeformRequestOpts} opts
   * @returns {Promise<*>}
   */
  static async request(apiUrl, opts = {}) {

    const { token, method = 'GET', path, body, query, type } = opts;

    let url = urlJoin(apiUrl, path);
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
      const json = await response.json();
      const { code, description } = json;
      throw new HttpError(description || statusText, status, code);
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