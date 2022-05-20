/**
 *
 * @param {string} str
 * @returns {null|any}
 */
module.exports.parseJson = function(str) {
  try {
    return JSON.parse(str);
  } catch(e) {
    return null;
  }
}