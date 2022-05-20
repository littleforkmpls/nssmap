/**
 *
 * @param {Chai.ChaiStatic} chai
 * @param {Chai.ChaiUtils} utils
 */
module.exports = function(chai, utils) {

  const Assertion = chai.Assertion;

  /**
   *
   */
  Assertion.addProperty('async', function() {
    utils.flag(this, 'async', true);
    if (typeof this._obj === 'function') {
      // if obj is func, execute it to get a promise
      utils.flag(this, 'object', this._obj());
    }
    new Assertion(this._obj).to.be.a('promise');
  });

  /**
   *
   */
  Assertion.overwriteMethod('throw', function (_super) {
    return function(expError) {
      if (utils.flag(this, 'async') !== true) {
        return _super.apply(this, arguments);
      }
      const promise = this._obj;
      const negate = Boolean(utils.flag(this, 'negate'));
      const shouldTestMessage = (expError !== void 0);
      const shouldThrow = (negate === false);
      return (async () => {
        let actError;
        let didThrow = false;
        try {
          const result = await promise;
        } catch(e) {
          didThrow = true;
          actError = e.message;
        }
        if (didThrow && shouldThrow && shouldTestMessage) {
          this.assert(
            expError === actError,
            'expected async function to throw #{exp}, but threw #{act} instead',
            'expected async function to not throw #{exp}, but threw #{act} instead',
            expError,
            actError,
            false
          );
          return;
        }
        if (didThrow && !shouldThrow) {
          this.assert(
            negate,
            'expected async function to not throw, but threw #{act} instead',
            'expected async function to not throw, but threw #{act} instead',
            expError,
            actError,
            false
          );
          return;
        }
        if (shouldThrow && !didThrow) {
          this.assert(
            false, // never true, always error
            'expected async function to throw but it did not',
            'expected async function to throw but it did not',
          );
        }
      })();
    }
  });
}
