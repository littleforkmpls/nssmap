/**
 * @typedef TypeformAnswer
 * @property {"boolean"|"choice"|"choices"|"email"|"file_url"|"number"|"text"|"url"} type
 * @property {string} text
 * @property {TypeformAnswerField} field
 * @property {TypeformAnswerChoice} choice
 * @property {TypeformAnswerChoices} choices
 * @property {boolean} [boolean]
 * @property {string} [email]
 * @property {string} [file_url]
 * @property {number} [number]
 * @property {string} [url]
 */

/**
 * @typedef TypeformAnswerChoice
 * @property {string} id
 * @property {string} ref
 * @property {string} label
 */

/**
 * @typedef TypeformAnswerChoices
 * @property {string[]} ids
 * @property {string[]} refs
 * @property {string[]} labels
 * @property {string} other
 */

/**
 * @typedef TypeformAnswerField
 * @property {string} id
 * @property {string} ref
 * @property {string} type
 */