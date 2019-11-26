const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../util/validation-test-helpers');

describe('root sim data objects', () => {
  let validator;
  let simData;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    simData = SimDataService.getSimData();
  });

  it('sim data is valid', () => {
    helpers.assertIsValid(validator, simData);
  });

  it('sim object required', () => {
    delete simData.sim;
    helpers.assertNotValid(validator, simData);
  });

  it('homeTeam required', () => {
    delete simData.homeTeam;
    helpers.assertNotValid(validator, simData);
  });

  it('teams required', () => {
    delete simData.teams;
    helpers.assertNotValid(validator, simData);
  });
});
