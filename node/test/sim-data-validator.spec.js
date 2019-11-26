const chai = require('chai');
const { expect } = chai;
const SimDataValidator = require('../lib/sim-data-validator');

class FakeValidator extends SimDataValidator {
  constructor () {
    super({ type: 'number' });
  }
}

describe('validator', () => {
  let validator;

  beforeEach(() => {
    validator = new FakeValidator();
  });

  it('returns errors when not valid', () => {
    const result = validator.validate('foo');
    expect(result.isValid).to.eq(false);
    expect(result.errors.length).to.be.above(0);
  });

  it('returns no errors when valid', () => {
    const result = validator.validate(3);
    expect(result.isValid).to.eq(true);
    expect(result.errors.length).to.eq(0);
  });
});
