var express = require('express');
var router = express.Router();

/* GET cats listing. */
router.get('/', function(req, res, next) {
  res.status(200)
  res.json({cats: [{name: 'piet'}]});
});

module.exports = router;
