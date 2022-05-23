/**
 * @typedef TypeformAnswer
 * @property {"boolean"|"choice"|"choices"|"email"|"file_url"|"number"|"text"|"url"} type
 * @property {string} text
 * @property {TypeformAnswerField} field
 * @property {TypeformAnswerChoice} choice
 * @property {string} [email]
 * @property {string} [file_url]
 * @property {string} [url]
 */

/**
 * @typedef TypeformAnswerChoice
 * @property {string} id
 * @property {string} ref
 * @property {string} label
 */

/**
 * @typedef TypeformAnswerField
 * @property {string} id
 * @property {string} ref
 * @property {string} type
 */