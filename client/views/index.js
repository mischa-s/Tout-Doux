const _ = require('lodash')
const form = require('./form')
const table = require ('./allTasksView')
module.exports = function (model) {

  return (
    `<div id="app">
      <h1>Tout Doux</h1>
      ${form()}
      <div>
          ${table(model.tasks)}
      </div>
    </div>
    `
  )
}
