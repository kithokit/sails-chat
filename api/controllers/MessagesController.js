/**
 * MessagesController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  sayHello: function (req, res) {
    res.send('hello world!');
  },

  index: function(req, res) {
    return res.view();
  }


};
