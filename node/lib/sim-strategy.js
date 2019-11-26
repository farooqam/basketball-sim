const EventEmitter = require('events');
const ValidationError = require('./validation-error');

class SimStrategy {
  constructor (validator) {
    if (new.target === SimStrategy) {
      throw new TypeError('Cannot construct SimStrategy instances directly.');
    }

    if (this.onExecute === undefined) {
      throw new TypeError('Must override the onExecute() method.');
    }

    this.validator = validator;
    this.events = new EventEmitter();
  }

  execute (simData) {
    const validationResult = this.validator.validate(simData);

    if (!validationResult.isValid) {
      throw new ValidationError('Sim data failed validation', validationResult.errors);
    }

    this.events.emit('validated');
    this.onExecute();
  }
}

module.exports = SimStrategy;
