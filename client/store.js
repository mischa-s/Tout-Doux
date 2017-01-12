const request = require('superagent')
require('superagent-as-promised')(request)


//Uppercase Store
module.exports = function (model) {
  const listeners = []

  var store = {
    subscribe: function (listener) {
      listeners.push(listener)
    },

    changeGreeting: function () {
      this.update("appName", "Why Helloooo")
    },

    fetchTasks: function () {
      request
       .get('/api/v1/tasks')
       .then((res) =>  {
        //  this.update('myString',
         this.update("tasks", res.body.ToutDoux);
       })
    },

    isComplete: function (id, complete) {
        


        fetchTasks()
    },

    update: function (key, update) {
      model[key] = update
      console.log('model after update:', model.task)

      this.notify(model)
    },

    notify: function (model) {
      listeners.forEach(function (listener) {
        listener(model)
      })
    }
  }

  return store
}
