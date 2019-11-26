const { SimDataValidator } = require('./sim-data-validator');
const schema = require('../data/bbsim-schema.json');

class TurnBasedSimDataValidator extends SimDataValidator {
  constructor () {
    super(schema);
  }
};

module.exports = TurnBasedSimDataValidator;
