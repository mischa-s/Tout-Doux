console.log('bundle loads')

const morphdom = require('morphdom')
const events = require('./events')
const Store = require('./store')
const view = require('./views')

const model = {appName: 'ToutDoux List', tasks:[]}
const store = Store(model)

document.addEventListener('DOMContentLoaded', (e) => {

  //Pass event from Index to Events
  events(store)
  store.subscribe((model) => {
    console.log('model:', model)
    render()
  })

  store.fetchTasks()
  render()

  function render () {
    const root = document.querySelector('#app')
    morphdom(root, view(model))
  }



  //store.fetchCats()


})
