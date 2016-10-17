'use strict'
const express = require('express')
const Slapp = require('slapp')
const BeepBoopConvoStore = require('slapp-convo-beepboop')
const BeepBoopContext = require('slapp-context-beepboop')
const db = require('beepboop-persist')()

if (!process.env.PORT) throw Error('PORT missing but required')

var slapp = Slapp({
  record: 'out.jsonl',
  convo_store: BeepBoopConvoStore(),
  context: BeepBoopContext()
})

require('beepboop-slapp-presence-polyfill')(slapp, { debug: true })
require('./app')(slapp, db)
var app = slapp.attachToExpress(express())

app.get('/', function (req, res) {
  res.send('Hello')
})

console.log('Listening on :' + process.env.PORT)
app.listen(process.env.PORT)
