const test = require('ava')
const seedTasks = require('../../db/seeds/tasks')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

//migrate the latest tasks database table
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})

// TEST 1 - gets all the tasks table data, then checks each row has an id (truthy) and then checks the name in the row matches the index of the seed data.

test('find | responds with a list of tasks', (t) => {
  t.plan(2)

  return db.find('ToutDoux', {})
    .then((tasks) => {
      console.log('tasks', tasks)
      ToutDoux.forEach((task, i) => {
        t.truthy(task.id)
        t.is(task.name, seedTasks[i].name)
      })
    })
})
