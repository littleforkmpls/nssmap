const chai = require('chai');
const chaiAsync = require('./async/async');

chai.use(chaiAsync);

module.exports = {
  expect: chai.expect
}