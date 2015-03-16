'use strict';

var express = require('express');
var app = express();
var router = require('./router');
var mongoose = require('mongoose');
var db = require('./config/db');
var conn = mongoose.connection;

mongoose.connect(db.url);

conn.on('error', function (cb) {
  console.log('db error');
});

conn.once('open', function (cb) {
  console.log('db connected');
});

app.use('/', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

module.exports = app;