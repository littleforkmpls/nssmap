/**
 * @typedef TypeformApiGetResponses
 * @property {number} total_items
 * @property {number} page_count
 * @property {TypeformResponse[]} items
 */

/**
 * @typedef TypeformResponse
 * @property {string} landing_id
 * @property {string} token
 * @property {string} response_id
 * @property {string} landed_at
 * @property {string} submitted_at
 * @property {{score: number}} calculated
 * @property {TypeformAnswer[]} answers
 */