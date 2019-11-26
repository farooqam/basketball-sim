const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../util/validation-test-helpers');

describe('twoPt object', () => {
  let validator;
  let twoPt;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    twoPt = SimDataService.getSimData().teams[0].twoPt;
  });

  it('pct missing', () => {
    delete twoPt.pct;
    helpers.assertNotValid(validator, twoPt);
  });

  it('pct out of range', () => {
    const percentages = [0.19, 1.01];

    percentages.forEach(p => {
      twoPt.pct = p;
      helpers.assertNotValid(validator, twoPt);
    });
  });

  it('att missing', () => {
    delete twoPt.att;
    helpers.assertNotValid(validator, twoPt);
  });

  it('att out of range', () => {
    const attempts = [9, 101];

    attempts.forEach(a => {
      twoPt.att = a;
      helpers.assertNotValid(validator, twoPt);
    });
  });
});
