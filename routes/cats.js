var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({cats: [{name: 'piet'}]});
});

module.exports = router;
