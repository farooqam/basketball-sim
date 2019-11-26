const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');

const TurnBasedSimStrategy = require('../lib/turn-based-sim-strategy');
const ValidatorService = require('../lib/validator-service');

describe('execute', () => {
  let strategy;
  let validatorServiceStub;

  afterEach(() => {
    sinon.restore();
  });

  it('throws error when sim data invalid', () => {
    const mock = {
      validate: () => {
        return {
          isValid: false,
          errors: ['Error 1', 'Error 2', 'Error 3']
        };
      }
    };

    strategy = new TurnBasedSimStrategy(mock);

    try {
      strategy.execute({});
    } catch (validationError) {
      expect(validationError.message).to.eq('Sim data failed validation');
      expect(validationError.errors).to.deep.eq(['Error 1', 'Error 2', 'Error 3']);
    }
  });

  it('raised validated event when sim data valid', () => {
    const mock = {
      validate: () => {
        return {
          isValid: true
        };
      }
    };

    strategy = new TurnBasedSimStrategy(mock);

    let eventRaised = false;
    strategy.events.on('validated', () => {
      eventRaised = true;
    });

    strategy.execute({});
    expect(eventRaised).to.eq(true);
  });
});
