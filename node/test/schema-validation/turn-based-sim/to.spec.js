const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('to object', () => {
  let validator;
  let simData;
  let team;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    simData = helpers.makeInstanceCopy();
    team = simData.teams[0];
  });

  it('missing', () => {
    delete team.to;
    helpers.assertNotValid(validator, simData);
  });

  it('out of range', () => {
    const turnovers = [-1, 51];

    turnovers.forEach(to => {
      team.to = to;
      helpers.assertNotValid(validator, simData);
    });
  });
});
