const { SimDataValidator } = require('./sim-data-validator');
const schema = require('../data/turn-based-sim-schema.json');

class TurnBasedSimDataValidator extends SimDataValidator {
  constructor () {
    super(schema);
  }
};

module.exports = TurnBasedSimDataValidator;
