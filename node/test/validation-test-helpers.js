const chai = require('chai');
const { expect } = chai;
const _ = require('lodash');
const schema = require('../data/bbsim-schema.json');
const instance = require('../data/bbsim.json');

const validate$ = (validator, instance) => {
  return validator.validate(instance, schema);
};

const isValid$ = (validator, instance) => {
  return validate$(validator, instance).valid;
};

const assertIsValid = (validator, instance) => {
  expect(isValid$(validator, instance)).to.eq(true);
};

const assertNotValid = (validator, instance) => {
  expect(isValid$(validator, instance)).to.eq(false);
};

const makeInstanceCopy = () => {
  return _.cloneDeep(instance);
};

module.exports = {
  assertIsValid,
  assertNotValid,
  makeInstanceCopy
};
