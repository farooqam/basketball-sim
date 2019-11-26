const chai = require('chai');
const { expect } = chai;

const SimStrategy = require('../lib/sim-strategy');

class FakeSimStrategy extends SimStrategy {
  onExecute (simData) {
  }
}

describe('execute', () => {
  let strategy;

  it('throws error when sim data invalid', () => {
    const mockValidator = {
      validate: () => {
        return {
          isValid: false,
          errors: ['Error 1', 'Error 2', 'Error 3']
        };
      }
    };

    strategy = new FakeSimStrategy(mockValidator);

    try {
      strategy.execute({});
    } catch (validationError) {
      expect(validationError.message).to.eq('Sim data failed validation');
      expect(validationError.errors).to.deep.eq(['Error 1', 'Error 2', 'Error 3']);
    }
  });

  it('raised validated event when sim data valid', () => {
    const mockValidator = {
      validate: () => {
        return {
          isValid: true
        };
      }
    };

    strategy = new FakeSimStrategy(mockValidator);

    let eventRaised = false;
    strategy.events.on('validated', () => {
      eventRaised = true;
    });

    strategy.execute({});
    expect(eventRaised).to.eq(true);
  });
});
