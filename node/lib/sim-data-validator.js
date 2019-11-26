const { Validator } = require('jsonschema');

class SimDataValidator {
  constructor (schema) {
    if (new.target === SimDataValidator) {
      throw new TypeError('Cannot construct SimDataValidator instances directly.');
    }
    this.schema = schema;
    this.validator = new Validator();
  }

  validate (simData) {
    const result = this.validator.validate(simData, this.schema);

    return {
      isValid: result.valid,
      errors: result.errors
    };
  }
}

module.exports = SimDataValidator;
