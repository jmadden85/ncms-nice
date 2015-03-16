'use strict';

var router = require('express').Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);

router.get('/', function (req, res) {
  res.sendFile(appDir + '/public/index.html');
});

router.get(/\/nodeCMS\/public\//, function (req, res) {
  var assetPath = req.originalUrl.replace(/\/nodeCMS/, '');
  res.sendFile(appDir + assetPath);
});

module.exports = router;