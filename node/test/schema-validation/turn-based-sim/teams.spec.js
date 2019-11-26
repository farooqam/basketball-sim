const _ = require('lodash');
const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('teams object', () => {
  let validator;
  let simData;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    simData = helpers.makeInstanceCopy();
  });

  it('missing', () => {
    delete simData.teams;
    helpers.assertNotValid(validator, simData);
  });

  it('contains one team', () => {
    simData.teams[0] = {};
    helpers.assertNotValid(validator, simData);
  });

  it('contains more than two teams', () => {
    simData.teams.push(_.cloneDeep(simData.teams[0]));
    helpers.assertNotValid(validator, simData);
  });
});
