'use strict'

module.exports = (slapp) => {
  const request = require('request');

  slapp.command('/im-not-busy', /.*/, (msg, text) => {

    options = {
      qs: {
        token: msg.resource.app_token,
        user: msg.resource.app_user_id
      }
    }

    request('https://slack.com/api/users.getPhoto', options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body)
      }
    })
  })

  slapp.command('/im-busy', /.*/, (msg, text) => {

  })
}
