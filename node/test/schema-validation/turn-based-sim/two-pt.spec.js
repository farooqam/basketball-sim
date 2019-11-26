const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('twoPt object', () => {
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
    delete team.twoPt;
    helpers.assertNotValid(validator, simData);
  });

  it('pct missing', () => {
    delete team.twoPt.pct;
    helpers.assertNotValid(validator, simData);
  });

  it('pct out of range', () => {
    const percentages = [0.19, 1.01];

    percentages.forEach(p => {
      team.twoPt.pct = p;
      helpers.assertNotValid(validator, simData);
    });
  });

  it('att missing', () => {
    delete team.twoPt.att;
    helpers.assertNotValid(validator, simData);
  });

  it('att out of range', () => {
    const attempts = [9, 101];

    attempts.forEach(a => {
      team.twoPt.att = a;
      helpers.assertNotValid(validator, simData);
    });
  });
});
