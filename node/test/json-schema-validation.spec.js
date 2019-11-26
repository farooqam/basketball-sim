const _ = require('lodash');
const { Validator } = require('jsonschema');
const helpers = require('./validation-test-helpers');

describe('valid schema', () => {
  let validator;
  let copy;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    copy = helpers.makeInstanceCopy();
  });

  it('works', () => {
    helpers.assertIsValid(validator, copy);
  });
});
