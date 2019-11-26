const { Validator } = require('jsonschema');

class ValidatorService {
  constructor (schema) {
    this.schema$ = schema;
    this.validator$ = new Validator();
  }

  validate (instance) {
    const result = this.validator$.validate(instance, this.schema$);

    return {
      isValid: result.valid,
      errors: result.errors
    };
  };
};

module.exports = ValidatorService;
