const { Validator } = require('jsonschema');
const helpers = require('../validation-test-helpers');

class SimDataService {
  static getSimData () {
    return helpers.makeInstanceCopy();
  }

  static getValidator () {
    return new Validator();
  }
}

module.exports = SimDataService;
