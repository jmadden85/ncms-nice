var express = require('express');
var app = express();
var router = require('./router');

app.use('/', router);
app.use('/home', router);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

module.exports = app;
