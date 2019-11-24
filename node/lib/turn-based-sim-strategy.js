const { EventEmitter } = require('events');

class TurnBasedSimStrategy {
  constructor (config) {
    this.config = config;
    this.events = new EventEmitter();
  }

  validateConfig () {
    if (!this.config) {
      this.events.emit('validated', false, 'No configuration obect specified.');
      return;
    }

    const teams = this.config.teams;

    if (!teams || teams.length !== 2) {
      this.events.emit('validated', false, 'Configuration should contain only two teams.');
      return;
    }

    this.events.emit('validated', true);
  }

  execute () {

  }
}

module.exports = TurnBasedSimStrategy;
