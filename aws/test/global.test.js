const { EnvCfg } = require('../lib/constants/Config');
const { StubTypeform } = require('../lib/services/Typeform.stub');
const { StubWordPress } = require('../lib/services/WordPress.stub');

const _console = {
  debug: console.debug,
  error: console.error,
  info:  console.info,
  warn:  console.warn
}

beforeEach(async () => {

  StubTypeform()
  StubWordPress();

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