const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../validation-test-helpers');

describe('homeTeam object', () => {
  let validator;
  let homeTeam;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    homeTeam = SimDataService.getSimData().homeTeam;
  });

  it('not specified', () => {
    homeTeam = '';
    helpers.assertNotValid(validator, homeTeam);
  });

  it('not correct length', () => {
    const names = ['A', 'AA', 'AAAA'];

    names.forEach(n => {
      homeTeam = n;
      helpers.assertNotValid(validator, homeTeam);
    });
  });

  it('not all upper case', () => {
    homeTeam = 'aaA';
    helpers.assertNotValid(validator, homeTeam);
  });

  it('not all letters', () => {
    homeTeam = 'AA1';
    helpers.assertNotValid(validator, homeTeam);
  });
});
