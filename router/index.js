var router = require('express').Router();
var home = require('./routes/home');

router.get('/', function (req, res) {
  res.send('test');
});

router.all('/home', home);

module.exports = router;