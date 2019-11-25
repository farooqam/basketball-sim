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

describe('validation errors', () => {
  let validator;
  let copy;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    copy = helpers.makeInstanceCopy();
  });

  describe('homeTeam', () => {
    it('missing', () => {
      delete copy.homeTeam;
      helpers.assertNotValid(validator, copy);
    });

    it('not specified', () => {
      copy.homeTeam = '';
      helpers.assertNotValid(validator, copy);
    });

    it('not correct length', () => {
      const names = ['A', 'AA', 'AAAA'];

      names.forEach(n => {
        copy.homeTeam = n;
        helpers.assertNotValid(validator, copy);
      });
    });
  });

  describe('sim object', () => {
    it('sim object missing', () => {
      delete copy.sim;
      helpers.assertNotValid(validator, copy);
    });

    it('iterations are missing', () => {
      delete copy.sim.iterations;
      helpers.assertNotValid(validator, copy);
    });

    it('iterations out of range', () => {
      const iterations = [-1, 0, 1000000 + 1];
      iterations.forEach(i => {
        copy.sim.iterations = i;
        helpers.assertNotValid(validator, copy);
      });
    });
  });
});
