const _ = require('lodash')
const form = require('./form')
const table = require ('./allTasksView')
module.exports = function (model) {

  return (
    `<div id="app">
      <h1>${model.appName}</h1>
      <div>
          ${table(model.tasks)}
      </div><br>
      <form id="add">
        <input id="newTask" type="text" placeholder="new task" name="task" value="" /><br /><br />
        <input id="addTask" type="submit" value="add task">
      </form>
    </div>
    `
  )
}
