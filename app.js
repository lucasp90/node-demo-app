var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello world!')
})

app.get('/ping', function (req, res) {
  res.send('pong')
})

module.exports = app