const _ = require('lodash');
const { Validator } = require('jsonschema');
const helpers = require('./validation-test-helpers');

describe('valid schema', () => {
  let validator;
  let copy;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    copy = helpers.makeInstanceCopy();
  });

  it('works', () => {
    helpers.assertIsValid(validator, copy);
  });
});

describe('validation errors', () => {
  let validator;
  let copy;

  before(() => {
    validator = new Validator();
  });

  beforeEach(() => {
    copy = helpers.makeInstanceCopy();
  });

  describe('homeTeam', () => {
    it('missing', () => {
      delete copy.homeTeam;
      helpers.assertNotValid(validator, copy);
    });

    it('not specified', () => {
      copy.homeTeam = '';
      helpers.assertNotValid(validator, copy);
    });

    it('not correct length', () => {
      const names = ['A', 'AA', 'AAAA'];

      names.forEach(n => {
        copy.homeTeam = n;
        helpers.assertNotValid(validator, copy);
      });
    });

    it('not all upper case', () => {
      copy.homeTeam = 'aaA';
      helpers.assertNotValid(validator, copy);
    });

    it('not all letters', () => {
      copy.homeTeam = 'AA1';
      helpers.assertNotValid(validator, copy);
    });
  });

  describe('sim object', () => {
    it('sim object missing', () => {
      delete copy.sim;
      helpers.assertNotValid(validator, copy);
    });

    it('iterations are missing', () => {
      delete copy.sim.iterations;
      helpers.assertNotValid(validator, copy);
    });

    it('iterations out of range', () => {
      const iterations = [-1, 0, 1000000 + 1];
      iterations.forEach(i => {
        copy.sim.iterations = i;
        helpers.assertNotValid(validator, copy);
      });
    });
  });

  describe('teams', () => {
    it('object missing', () => {
      delete copy.teams;
      helpers.assertNotValid(validator, copy);
    });

    it('contains one team', () => {
      copy.teams[0] = {};
      helpers.assertNotValid(validator, copy);
    });

    it('contains more than two teams', () => {
      copy.teams.push(_.cloneDeep(copy.teams[0]));
      helpers.assertNotValid(validator, copy);
    });

    it('team name missing', () => {
      delete copy.teams[0].name;
      helpers.assertNotValid(validator, copy);
    });

    it('team name not specified', () => {
      copy.teams[0].name = '';
      helpers.assertNotValid(validator, copy);
    });

    it('team name not correct length', () => {
      const names = ['A', 'AA', 'AAAA'];

      names.forEach(n => {
        copy.teams[0].name = n;
        helpers.assertNotValid(validator, copy);
      });
    });

    it('team name not all upper case', () => {
      copy.teams[0].name = 'aaA';
      helpers.assertNotValid(validator, copy);
    });

    it('team name not all letters', () => {
      copy.teams[0].name = 'AA1';
      helpers.assertNotValid(validator, copy);
    });

    it('pace missing', () => {
      delete copy.teams[0].pace; 
      helpers.assertNotValid(validator, copy);
    });

    it('pace out of range', () => {
      const paces = [89, 201];

      paces.forEach(p => {
        copy.teams[0].pace = p;
        helpers.assertNotValid(validator, copy);
      });
    });
  });

  describe('2pt object', () => {
    it('missing', () => {
      delete copy.teams[0].twoPt;
      helpers.assertNotValid(validator, copy);
    });

    it('pct missing', () => {
      delete copy.teams[0].twoPt.pct;
      helpers.assertNotValid(validator, copy);
    });

    it('pct out of range', () => {
      const percentages = [0.19, 1.01];

      percentages.forEach(p => {
        copy.teams[0].twoPt.pct = p;
        helpers.assertNotValid(validator, copy);
      });
    });

    it('att missing', () => {
      delete copy.teams[0].twoPt.att;
      helpers.assertNotValid(validator, copy);
    });

    it('att out of range', () => {
      const attempts = [9, 101];

      attempts.forEach(a => {
        copy.teams[0].twoPt.att = a;
        helpers.assertNotValid(validator, copy);
      });
    });
  });

  describe('3pt object', () => {
    it('missing', () => {
      delete copy.teams[0].threePt;
      helpers.assertNotValid(validator, copy);
    });

    it('pct missing', () => {
      delete copy.teams[0].threePt.pct;
      helpers.assertNotValid(validator, copy);
    });

    it('pct out of range', () => {
      const percentages = [-0.01, 1.01];

      percentages.forEach(p => {
        copy.teams[0].threePt.pct = p;
        helpers.assertNotValid(validator, copy);
      });
    });

    it('att missing', () => {
      delete copy.teams[0].threePt.att;
      helpers.assertNotValid(validator, copy);
    });

    it('att out of range', () => {
      const attempts = [-1, 71];

      attempts.forEach(a => {
        copy.teams[0].threePt.att = a;
        helpers.assertNotValid(validator, copy);
      });
    });
  });

  describe('to object', () => {
    it('missing', () => {
      delete copy.teams[0].to;
      helpers.assertNotValid(validator, copy);
    });

    it('out of range', () => {
      const turnovers = [-1, 51];

      turnovers.forEach(to => {
        copy.teams[0].to = to;
        helpers.assertNotValid(validator, copy);
      });
    });
  });
});
