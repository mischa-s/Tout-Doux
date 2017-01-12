const _ = require('lodash')
const form = require('./form')
const table = require ('./allTasksView')
// const tasks = [{"id":1,"task":"Populate Database"},{"id":2,"task":"Make Add Function"},{"id":3,"task":"Style It!"}]
module.exports = function (model) {

  return (
    `<div id="app">
      <h1>My app: ${model.appName}</h1>
      ${form()}
      <div>
          ${table(model.tasks)}
          <button id="greeting">Change Greeting</button>
      </div>
    </div>
    `
  )
}
