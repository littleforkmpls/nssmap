const fetch = require('node-fetch');
const { HttpError } = require('../utils/errors');
const { buildQueryString, urlJoin } = require('../utils/url');

module.exports.WordPress = class WordPress {

  /**
   * @typedef WordPressCreatePostOpts
   * @property {WordPressCreds} creds
   * @property {Record<string,string>} body
   */

  /**
   *
   * @param {string} siteUrl
   * @param {WordPressCreatePostOpts} opts
   * @returns {Promise<true|null>}
   */
  static async createPost(siteUrl, {creds, body}) {
    return await WordPress.request(siteUrl, {
      creds, body,
      method: 'POST',
      path: '/wp/v2/posts'
    });
  }

  // ******************************************************

  /**
   * @typedef  WordPressGetPostOpts
   * @property {string|number} itemId
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} [query]
   */

  /**
   *
   * @param {string} siteUrl
   * @param {WordPressGetPostOpts} opts
   * @returns {Promise<any[]>}
   */
  static async getPost(siteUrl, {itemId, creds, query}) {
    try {
      const path = `/wp/v2/posts/${itemId}`;
      return await WordPress.request(siteUrl, {creds, path, query});
    } catch(e) {
      return null;
    }
  }

  // ******************************************************

  /**
   * @typedef WordPressGetPostsOpts
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} [query]
   */

  /**
   *
   * @param {string} siteUrl
   * @param {WordPressGetPostsOpts} opts
   * @returns {Promise<any[]>}
   */
  static async getPosts(siteUrl, {creds, query}) {
    try {
      const path = '/wp/v2/posts';
      return await WordPress.request(siteUrl, {creds, path, query});
    } catch(e) {
      return [];
    }
  }

  // **************************************************************************
  // **************************************************************************
  // **************************************************************************

  /**
   * @typedef WordPressRequestOpts
   * @property {string} path
   * @property {any} [body]
   * @property {WordPressCreds} [creds]
   * @property {string} [method]
   * @property {Record<string,any>} [query]
   */

  /**
   * @typedef WordPressCreds
   * @property {string} username
   * @property {string} password
   */

  /**
   *
   * @param {string} siteUrl
   * @param {WordPressRequestOpts} opts
   * @private
   */
  static async request(siteUrl, opts = {}) {

    const { method = 'GET', creds, path, body, query } = opts;

    let url = urlJoin(siteUrl, 'wp-json', path);
    if (query) url += buildQueryString(query);

    /** @type {RequestInit} */
    const params = { method, headers: {} };

    if (body) {
      params.body = JSON.stringify(body);
      params.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }

    if (creds) {
      const { username = '', password = '' } = creds;
      const token = Buffer.from(`${username}:${password}`).toString('base64');
      params.headers['Authorization'] = `Basic ${token}`;
    }

    const response = await fetch(url, params);
    const { status, statusText } = response;
    const json = await response.json();

    if (status >= 400) {
      const { code, message } = json;
      throw new HttpError(message || statusText, status, code);
    }

    return json;
  }

}