const chai = require('chai');
const { expect } = chai;

const ValidatorService = require('../lib/validator-service');
const schema = require('../data/bbsim-schema.json');
const validInstance = require('../data/bbsim.json');

describe('validator service', () => {
  let service;

  beforeEach(() => {
    service = new ValidatorService(schema);
  });

  it('returns errors when not valid', () => {
    const result = service.validate({});
    expect(result.isValid).to.eq(false);
    expect(result.errors.length).to.be.above(0);
  });

  it('returns no errors when valid', () => {
    const result = service.validate(validInstance);
    expect(result.isValid).to.eq(true);
    expect(result.errors.length).to.eq(0);
  });
});
