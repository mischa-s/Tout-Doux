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
                      <td><input type="radio" name="complete" value=${task.id}><del> ${task.task}</td>
                    </tr>`)
          })


        }
    </table>`
  )
}
