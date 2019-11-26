const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../util/validation-test-helpers');

describe('to object', () => {
  let validator;
  let to;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    to = helpers.makeInstanceCopy().teams[0].to;
  });

  it('out of range', () => {
    const turnovers = [-1, 51];

    turnovers.forEach(turnover => {
      to = turnover;
      helpers.assertNotValid(validator, to);
    });
  });
});
