const _ = require('lodash');
const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../validation-test-helpers');

describe('teams object', () => {
  let validator;
  let teams;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    teams = SimDataService.getSimData().teams;
  });

  it('contains one team', () => {
    teams[0] = {};
    helpers.assertNotValid(validator, teams);
  });

  it('contains more than two teams', () => {
    teams.push(_.cloneDeep(teams[0]));
    helpers.assertNotValid(validator, teams);
  });
});
