const express = require('express')
const route = express.Router()

module.exports = function (db) {
 
  // GET api/v1/cats/
  route.get('/', get)

  function get (req, res, next) {
    db.find('cats', {})
      .then((cats) => {
        res.json({ data: cats })
      })
      .catch(next)
  }

  return route
}


