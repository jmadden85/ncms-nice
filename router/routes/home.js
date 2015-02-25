var router = require('express').Router();
var path = require('path');
var appDir = path.dirname(require.main.filename);

router.get('/home', function (req, res) {
  res.sendFile(appDir + '/public/index.html');
});


module.exports = router;