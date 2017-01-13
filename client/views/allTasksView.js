module.exports = function (tasks) {
  return (
    `<table>
      <tr>
        <th>Task</th>
      </tr>
        ${
          tasks.map((task) => {
            return (
                    `<tr>
                      <td> <input type="checkbox" name="complete" id=${task.id} value=${task.complete} ${task.complete ? 'checked' : ''}> ${task.task}</td></tr>`)
          })


        }
    </table>`
  )
}
