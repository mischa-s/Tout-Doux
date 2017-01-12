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
                      <td>${task.task}</td>
                    </tr>`)
          })


        }
    </table>`
  )
}
