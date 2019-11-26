const SimDataService = require('../../util/sim-data-service');
const helpers = require('../../util/validation-test-helpers');

describe('sim object', () => {
  let validator;
  let sim;

  before(() => {
    validator = SimDataService.getValidator();
  });

  beforeEach(() => {
    sim = SimDataService.getSimData().sim;
  });

  it('iterations missing', () => {
    delete sim.iterations;
    helpers.assertNotValid(validator, sim);
  });

  it('iterations out of range', () => {
    const iterations = [-1, 0, 1000000 + 1];
    iterations.forEach(i => {
      sim.iterations = i;
      helpers.assertNotValid(validator, sim);
    });
  });
});
