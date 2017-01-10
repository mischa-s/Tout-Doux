const _ = require('lodash')
const table = require('./table')
const form = require('./form')

module.exports = function (model) {
  console.log('table: ', table(model.cats))


  return (
    `<div id="app">
      ${table(model.cats)}
      <div></div>
      ${form()}
    </div>`
  )
}

