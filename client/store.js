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

    deleteTask: function(taskId){
      request
        .del(`/api/v1/tasks/${taskId}`)
        .then((res) =>  {
          this.update("tasks", res.body.ToutDoux);
        })
    toggleComplete: function (id) {
      request
      .post(`/api/v1/tasks/${id}`)
      .send(id)
      .then((res) => {
        console.log("Res Body", res.body);
      })
    },

    isComplete: function (id, complete) {

        // fetchTasks()
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
