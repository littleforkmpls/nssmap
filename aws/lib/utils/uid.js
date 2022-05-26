const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
/**
 *
 * @param {number} [len]
 * @return {string}
 */
module.exports.uid = function(len = 20) {
  return Array(len).fill().map(() => {
    return CHARS[Math.floor(Math.random() * CHARS.length)]
  }).join('');
}