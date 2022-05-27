
/**
 * Turn an object into a URL query string.
 *
 * @example
 * buildQueryString({foo:1, bar:2});
 * // '?foo=1&bar=2'
 *
 * @param {Record<string,string>} obj
 * @returns {string}
 */
const buildQueryString = module.exports.buildQueryString = function(obj) {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([k,v]) => params.append(k, v));
  return `?${params.toString()}`;
}

/**
 * Remove duplicate forward slashes from a string. Not smart enough
 * to leave https:// protocol strings alone, so use it for paths.
 *
 * @example
 * dedupleSlashes('/foo///bar/baz//')
 * // '/foo/bar/baz/'
 *
 * @param {string} str
 * @returns {string}
 */
const dedupeSlashes = module.exports.dedupeSlashes = function(str) {
  return str.split('/').filter(Boolean).join('/');
}

/**
 * Return the filename portion of an absolute URL.
 *
 * @example
 * getFilename('https://example.com/foo/bar/baz.png?w=100&h=100');
 * // 'baz.png'
 *
 * @param {string} str
 * @type {string|null}
 */
const getFilename = module.exports.getFilename = function(str) {
  try {
    return (new URL(str)).pathname.split('/').pop();
  } catch(e) {
    return null;
  }
}

/**
 * Join a series of strings together to make a valid absolute URL.
 * Returns null if absolute URL cannot be made.
 *
 * @example
 * urlJoin('https://example.com/', '/foo/', '/bar', 'baz', '?query=1')
 * // 'https://example.com/foo/bar/baz?query=1'
 *
 * @param {...string} parts
 * @returns {string|null}
 */
const urlJoin = module.exports.urlJoin = function(...parts) {
  try {
    const { origin, pathname, search, hash } = new URL(parts.filter(Boolean).join('/'));
    return `${origin}/${dedupeSlashes(pathname)}${search}${hash}`;
  } catch(e) {
    return null;
  }
}