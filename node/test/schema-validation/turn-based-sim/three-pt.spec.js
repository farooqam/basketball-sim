const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('threePt object', () => {
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
    delete team.threePt;
    helpers.assertNotValid(validator, simData);
  });

  it('pct missing', () => {
    delete team.threePt.pct;
    helpers.assertNotValid(validator, simData);
  });

  it('pct out of range', () => {
    const percentages = [-0.01, 1.01];

    percentages.forEach(p => {
      team.threePt.pct = p;
      helpers.assertNotValid(validator, simData);
    });
  });

  it('att missing', () => {
    delete team.threePt.att;
    helpers.assertNotValid(validator, simData);
  });

  it('att out of range', () => {
    const attempts = [-1, 71];

    attempts.forEach(a => {
      team.threePt.att = a;
      helpers.assertNotValid(validator, simData);
    });
  });
});
