'use strict'

module.exports = (slapp, db) => {
  slapp.message('^(hi|hello|hey)$', ['direct_mention', 'direct_message'], (msg, text) => {
    db.set('abc', [1,2,3], function (err){
      console.log('val is set')
    })

    db.get('abc', function(err, val){
      console.log(val)
      val.forEach( function(i) { msg.say(i + "") } )
    })
  })
}
