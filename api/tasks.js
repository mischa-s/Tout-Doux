const express = require('express')
const route = express.Router()

module.exports = function (db) {

  // GET api/v1/tasks/
  route.get('/', get)
  route.post('/', post)
  route.delete('/:id', del)

  function get (req, res, next) {
    db.find("ToutDoux", {})
      .then((ToutDoux) => {
        res.json({ToutDoux})
      })
      .catch(next)
  }

  function post (req, res, next) {
    db.insert("ToutDoux", req.body)
      .then((ToutDoux) => {
        res.json({ToutDoux})
      })
      .catch(next)
  }

  function del (req, res, next) {
    console.log(req.params);

    db.deleteById("ToutDoux", req.params.id)
      .then((ToutDoux) => {
        res.json({ToutDoux})
      })
      .catch(next)
  }


  return route
}
