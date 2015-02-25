var router = require('express').Router();
var home = require('./routes/home');

router.get('/', function (req, res) {
  res.send('test');
});

router.get('/home', home);

module.exports = router;