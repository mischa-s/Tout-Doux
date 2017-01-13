const getFormData = require("get-form-data")

module.exports = function (store) {

  // when a click on #submit is recieved



  // call a method on store
  document.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('clicked', e.target)

    switch (e.target.id) {

      case 'addTask':
        // console.log('you clicked addTask')
        const form = document.querySelector("#add")
        const task = getFormData(form)
        store.addTask(task)
        break
    }

    switch (e.target.name) {

      case "complete":
     console.log(e.target.id, e.target.value)
      break

      case "delete":
      store.deleteTask(e.target.id)
      break

    }
      store.toggleComplete(e.target.id)
      store.fetchTasks()
   })
  }
