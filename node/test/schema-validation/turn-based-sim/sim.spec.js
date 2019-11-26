const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('sim object', () => {
  let validator;
  let simData;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    simData = helpers.makeInstanceCopy();
  });

  it('missing', () => {
    delete simData.sim;
    helpers.assertNotValid(validator, simData);
  });

  it('iterations missing', () => {
    delete simData.sim.iterations;
    helpers.assertNotValid(validator, simData);
  });

  it('iterations out of range', () => {
    const iterations = [-1, 0, 1000000 + 1];
    iterations.forEach(i => {
      simData.sim.iterations = i;
      helpers.assertNotValid(validator, simData);
    });
  });
});
