const request = require('superagent')
require('superagent-as-promised')(request)

module.exports = function (model) {
  const listeners = []

  return {
    subscribe: function (listener) {
      listeners.push(listener)
    },

    fetchCats: function () {
      request
        .get('/api/v1/cats')
        .then((res) => this.update('cats', res.body.data))
    },

    update: function (key, update) {
      console.log('model before update:', model)
      model[key] = update

      console.log('model after:', model)

      this.notify(model)
    },

    notify: function (model) {
      console.log('listener[0]', listeners[0])

      listeners.forEach(function (listener) {
        listener(model)
      })
    }
  }
}

