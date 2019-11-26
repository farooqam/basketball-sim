const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../validation-test-helpers');

describe('threePt object', () => {
  let validator;
  let threePt;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    threePt = SimDataService.getSimData().teams[0].threePt;
  });

  it('pct missing', () => {
    delete threePt.pct;
    helpers.assertNotValid(validator, threePt);
  });

  it('pct out of range', () => {
    const percentages = [-0.01, 1.01];

    percentages.forEach(p => {
      threePt.pct = p;
      helpers.assertNotValid(validator, threePt);
    });
  });

  it('att missing', () => {
    delete threePt.att;
    helpers.assertNotValid(validator, threePt);
  });

  it('att out of range', () => {
    const attempts = [-1, 71];

    attempts.forEach(a => {
      threePt.att = a;
      helpers.assertNotValid(validator, threePt);
    });
  });
});
