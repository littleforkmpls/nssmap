
const { StubTypeform } = require('../lib/services/Typeform.stub');
const { StubWordPress } = require('../lib/services/WordPress.stub');

beforeEach(async () => {

  StubTypeform()
  StubWordPress();

});