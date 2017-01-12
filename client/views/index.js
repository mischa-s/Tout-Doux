const _ = require('lodash')
const form = require('./form')

module.exports = function (model) {

  return (
    `<div id="app">
    <h1>My app: ${model.appName}</h1>
      ${form()}
      <div>
      <button id="greeting">Change Greeting</button>
      </div>
    </div>

    `
  )
}
