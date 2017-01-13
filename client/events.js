const getFormData = require("get-form-data")

module.exports = function (store) {

  // when a click on #submit is recieved



  // call a method on store
  document.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('clicked', e.target)

    switch (e.target.id) {

      case 'addTask':
        // console.log('you clicked addTask')
        const form = document.querySelector("#add")
        const task = getFormData(form)
        console.log("newtask", task)
        store.addTask(task)
        store.fetchTasks() //WHY DO YOU NEED THIS
        break
    }
    switch (e.target.name) {
      case "complete":
      store.toggleComplete(e.target.id, e.target.value)
   }

  })




}
