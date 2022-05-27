const { EnvCfg } = require('../lib/constants/Config');

beforeEach(() => {

  // Stub some of the console logging methods so the test output
  // is clean. Don't stub console.log() so that it can be used
  // for temporary logging in tests.

  if (EnvCfg.isTest) {
    console.debug = () => {};
    console.error = () => {};
    console.info  = () => {};
    console.warn  = () => {};
  }
});