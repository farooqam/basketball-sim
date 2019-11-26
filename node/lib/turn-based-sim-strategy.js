const EventEmitter = require('events');
const ValidationError = require('../lib/validation-error');

class TurnBasedSimStrategy {
  constructor (validatorService) {
    this.validatorService = validatorService;
    this.events = new EventEmitter();
  }

  execute (simData) {
    const validationResult = this.validatorService.validate(simData);

    if (!validationResult.isValid) {
      throw new ValidationError('Sim data failed validation', validationResult.errors);
    }

    this.events.emit('validated');
  }
}

module.exports = TurnBasedSimStrategy;
