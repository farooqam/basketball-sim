const { Validator } = require('jsonschema');
const helpers = require('../../validation-test-helpers');

describe('sim object', () => {
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

  it('name missing', () => {
    delete simData.teams[0].name;
    helpers.assertNotValid(validator, simData);
  });

  it('name not specified', () => {
    team.name = '';
    helpers.assertNotValid(validator, simData);
  });

  it('name not correct length', () => {
    const names = ['A', 'AA', 'AAAA'];

    names.forEach(n => {
      team.name = n;
      helpers.assertNotValid(validator, simData);
    });
  });

  it('name not all upper case', () => {
    team.name = 'aaA';
    helpers.assertNotValid(validator, simData);
  });

  it('name not all letters', () => {
    team.name = 'AA1';
    helpers.assertNotValid(validator, simData);
  });

  it('pace missing', () => {
    delete team.pace;
    helpers.assertNotValid(validator, simData);
  });

  it('pace out of range', () => {
    const paces = [89, 201];

    paces.forEach(p => {
      team.pace = p;
      helpers.assertNotValid(validator, simData);
    });
  });
});
