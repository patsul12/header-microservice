var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/whoami', function(req, res, next) {
  var uaParser = require('ua-parser').parse(req.headers['user-agent']);
  var ip = req.ip;
  var language = req.headers["accept-language"];
  var software = uaParser.os.toString();
  var output = { ip: ip, language: language, software: software };
  res.json(output);
});

module.exports = router;
