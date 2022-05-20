const fetch = require('node-fetch');
const { HttpError } = require('../utils/errors');
const { buildQueryString, urlJoin } = require('../utils/url');

/**
 * @typedef WordPressCreds
 * @property {string} username
 * @property {string} password
 */

/**
 * @typedef WordPressFetchOpts
 * @property {string} path
 * @property {any} [body]
 * @property {WordPressCreds} [creds]
 * @property {string} [method]
 * @property {Record<string,any>} [query]
 */

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
   *
   * @param {string} siteUrl
   * @param {number|string} itemId
   * @param {WordPressGetPostsOpts} opts
   * @returns {Promise<any[]>}
   */
  static async getPost(siteUrl, itemId, {creds, query}) {
    try {
      return await WordPress.request(siteUrl, {
        creds, query,
        path: `/wp/v2/posts/${itemId}`
      });
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
      return await WordPress.request(siteUrl, {
        creds, query, path: '/wp/v2/posts'
      });
    } catch(e) {
      return [];
    }
  }

  // **************************************************************************
  // **************************************************************************
  // **************************************************************************

  /**
   *
   * @param {string} siteUrl
   * @param {WordPressFetchOpts} opts
   * @private
   */
  static async request(siteUrl, opts = {}) {

    const { creds, method = 'GET', path, body, query } = opts;

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