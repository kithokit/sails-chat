/**
 * Messages
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {
  adapter: 'mysql',

  config: {
    user: 'root',
    password: 'password',
    database: 'sails',
    host: '127.0.0.1'
  },
  attributes: {
  	message: 'string'
  }

};
