const _ = require('lodash')
const form = require('./form')
const table = require ('./allTasksView')
// const tasks = [{"id":1,"task":"Populate Database"},{"id":2,"task":"Make Add Function"},{"id":3,"task":"Style It!"}]
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
