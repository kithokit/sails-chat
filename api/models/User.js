/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {

  	/* e.g.
  	nickname: 'string'
  	*/

    userid :{
      type: 'string',
      required: true
    },

    password :{
      type: 'string',
      required: true
    },

    fullname :{
      type: 'string',
      required: true
    },

    email :{
      type: 'string',
      email: true,
      required: true,
      unique: true

    },



  }

};
