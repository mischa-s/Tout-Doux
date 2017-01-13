const request = require('superagent')
require('superagent-as-promised')(request)


//Uppercase Store
module.exports = function (model) {
  const listeners = []

  var store = {
    subscribe: function (listener) {
      listeners.push(listener)
    },

    addTask: function (task) {
      console.log("task in addTask", task);
      request
       .post('/api/v1/tasks')
       .send(task)
       .then((res) =>  {
        //  console.log("res.body",res);
         this.update("tasks", res.body.ToutDoux);
       })
    },

    fetchTasks: function () {
      request
       .get('/api/v1/tasks')
       .then((res) =>  {
         this.update("tasks", res.body.ToutDoux);
       })
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
