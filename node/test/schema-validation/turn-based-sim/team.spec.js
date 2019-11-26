const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../util/validation-test-helpers');

describe('team object', () => {
  let validator;
  let team;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    team = SimDataService.getSimData().teams[0];
  });

  it('name missing', () => {
    delete team.name;
    helpers.assertNotValid(validator, team);
  });

  it('name not specified', () => {
    team.name = '';
    helpers.assertNotValid(validator, team);
  });

  it('name not correct length', () => {
    const names = ['A', 'AA', 'AAAA'];

    names.forEach(n => {
      team.name = n;
      helpers.assertNotValid(validator, team);
    });
  });

  it('name not all upper case', () => {
    team.name = 'aaA';
    helpers.assertNotValid(validator, team);
  });

  it('name not all letters', () => {
    team.name = 'AA1';
    helpers.assertNotValid(validator, team);
  });

  it('pace missing', () => {
    delete team.pace;
    helpers.assertNotValid(validator, team);
  });

  it('pace out of range', () => {
    const paces = [89, 201];

    paces.forEach(p => {
      team.pace = p;
      helpers.assertNotValid(validator, team);
    });
  });

  it('twoPt object required', () => {
    delete team.twoPt;
    helpers.assertNotValid(validator, team);
  });

  it('threePt object required', () => {
    delete team.threePt;
    helpers.assertNotValid(validator, team);
  });

  it('to object required', () => {
    delete team.to;
    helpers.assertNotValid(validator, team);
  });
});
