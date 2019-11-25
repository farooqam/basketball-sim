const chai = require('chai');
const { expect } = chai;

const TurnBasedSimStrategy = require('../lib/turn-based-sim-strategy');

describe('TurnBasedSimStrategy', () => {
  describe('validate()', () => {
    it('invalid when config isn\'t specified', () => {
      const configs = [null, undefined];

      configs.forEach(config => {
        const strategy = new TurnBasedSimStrategy(config);

        strategy.events.on('validated', (result, msg) => {
          expect(result).to.eq(false);
          expect(msg).to.eq('No configuration obect specified.');
        });

        strategy.validateConfig();
      });
    });

    it('invalid when ');

    it('invalid when both teams not specified', () => {
      const configs = [
        {},
        { teams: [] },
        { teams: [{ team1: {} }] },
        { teams: [{ team1: {} }, { team2: {} }, { team3: {} }] }
      ];

      configs.forEach(config => {
        const strategy = new TurnBasedSimStrategy(config);

        strategy.events.on('validated', (result, msg) => {
          expect(result).to.eq(false);
          expect(msg).to.eq('Configuration should contain only two teams.');
        });

        strategy.validateConfig();
      });
    });
  });
});
