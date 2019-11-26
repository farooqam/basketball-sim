const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('homeTeam object', () => {
  let validator;
  let simData;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    simData = helpers.makeInstanceCopy();
  });

  it('missing', () => {
    delete simData.homeTeam;
    helpers.assertNotValid(validator, simData);
  });

  it('not specified', () => {
    simData.homeTeam = '';
    helpers.assertNotValid(validator, simData);
  });

  it('not correct length', () => {
    const names = ['A', 'AA', 'AAAA'];

    names.forEach(n => {
      simData.homeTeam = n;
      helpers.assertNotValid(validator, simData);
    });
  });

  it('not all upper case', () => {
    simData.homeTeam = 'aaA';
    helpers.assertNotValid(validator, simData);
  });

  it('not all letters', () => {
    simData.homeTeam = 'AA1';
    helpers.assertNotValid(validator, simData);
  });
});
