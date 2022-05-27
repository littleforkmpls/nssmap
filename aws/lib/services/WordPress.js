const fetch = require('node-fetch');
const { HttpError } = require('../utils/errors');
const { buildQueryString, urlJoin } = require('../utils/url');

module.exports.WordPress = class WordPress {

  /**
   * @typedef WordPressCreatePostOpts
   * @property {string} baseUrl
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} body
   */

  /**
   *
   * @param {WordPressCreatePostOpts} opts
   * @returns {Promise<WordPressCreatePostResponse>}
   */
  static async createPost(opts = {}) {
    const { baseUrl, creds, body } = opts;
    return await WordPress.request({
      method: 'POST',
      path: '/wp/v2/posts',
      baseUrl, creds, body,
    });
  }

  // ******************************************************

  /**
   * @typedef  WordPressGetPostOpts
   * @property {string} baseUrl
   * @property {string|number} itemId
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} [query]
   */

  /**
   *
   * @param {WordPressGetPostOpts} opts
   * @returns {Promise<any[]>}
   */
  static async getPost(opts = {}) {
    try {
      const { baseUrl, itemId, creds, query } = opts;
      const path = `/wp/v2/posts/${itemId}`;
      return await WordPress.request({baseUrl, creds, path, query});
    } catch(e) {
      if (e.status === 404) return null;
      throw e;
    }
  }

  // ******************************************************

  /**
   * @typedef WordPressGetPostsOpts
   * @property {string} baseUrl
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} [query]
   */

  /**
   *
   * @param {WordPressGetPostsOpts} opts
   * @returns {Promise<any[]>}
   */
  static async getPosts(opts = {}) {
    const path = '/wp/v2/posts';
    const { baseUrl, creds, query } = opts;
    return await WordPress.request({baseUrl, creds, path, query});
  }

  // ******************************************************

  /**
   * @typedef WordPressUpdatePostOpts
   * @property {string} baseUrl
   * @property {string|number} itemId
   * @property {WordPressCreds} creds
   * @property {Record<string,any>} body
   */

  /**
   *
   * @param {WordPressUpdatePostOpts} opts
   * @returns {Promise<Record<string, any>>}
   */
  static async updatePost(opts = {}) {
    const { baseUrl, itemId, creds, body } = opts;
    return await WordPress.request({
      method: 'POST',
      path: `/wp/v2/posts/${itemId}`,
      baseUrl, creds, body,
    });
  }

  // ******************************************************

  /**
   * @typedef WordPressGetTagsOpts
   * @property {string} baseUrl
   * @property {WordPressCreds} creds
   */

  /**
   * Note: This only returns the first 100 tags. If you have more than 100 tags
   * then you will need to update this to make additional calls to collect all
   * of the pages of tags.
   *
   * @param {WordPressGetTagsOpts} opts
   * @returns {Promise<WordPressTag[]>}
   */
  static async getTags(opts = {}) {
    const { baseUrl, creds } = opts;
    return await WordPress.request({
      baseUrl, creds,
      path: '/wp/v2/tags',
      query: { per_page: 100 }
    });
  }

  // **************************************************************************
  // **************************************************************************
  // **************************************************************************

  /**
   * @typedef WordPressRequestOpts
   * @property {string} baseUrl
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
   * @param {WordPressRequestOpts} opts
   * @returns {Promise<any>}
   * @throws {HttpError}
   */
  static async request(opts = {}) {

    const {
      method = 'GET',
      baseUrl,
      creds,
      path,
      body,
      query
    } = opts;

    let url = urlJoin(baseUrl, 'wp-json', path) || '';
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
      const { code, message, data } = json;
      throw new HttpError(message || statusText, status, code, data);
    }

    return json;
  }

}