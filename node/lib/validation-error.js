class ValidationError extends Error {
  constructor (message, errors) {
    super();
    this.message = message;
    this.errors = errors;
  }
}

module.exports = ValidationError;
