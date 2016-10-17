'use strict'

module.exports = (slapp) => {
  slapp.message('^(hi|hello|hey)$', ['direct_mention', 'direct_message'], (msg, text) => {
    slapp.convoStore.set('abc', [1,2,3], function (err){
      console.log('val is set')
    })

    slapp.convoStore.get('abc', function(err, val){
      val.forEach( function(i) { msg.say(i) } )
    })
  })
}
