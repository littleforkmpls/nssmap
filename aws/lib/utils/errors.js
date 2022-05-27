
class HttpError extends Error {
  constructor (msg, status, code, data) {
    super(msg);
    this.code = code;
    this.status = status;
    this.data = data;
  }
  toJSON() {
    const message = this.toString();
    const  { code, status, data } = this;
    return { message, code, status, data };
  }
  toString() {
    const code = (this.code) ? `(${this.code})` : '';
    return `HttpError ${this.status}: ${this.message} ${code}`;
  }
}

module.exports.HttpError = HttpError;

module.exports.HttpBadRequest = class extends HttpError {
  constructor (msg = 'Bad Request', code) {
    super(msg, 400, code);
  }
}

module.exports.HttpUnauthorized = class extends HttpError {
  constructor (msg = 'Unauthorized', code) {
    super(msg, 401, code);
  }
}

module.exports.HttpInternalServerError = class extends HttpError {
  constructor (msg = 'Internal Server Error', code) {
    super(msg, 500, code);
  }
}