const test = require('ava')
const seedCats = require('../../db/seed-cats')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)

test.beforeEach(() => {
  return testKnex.migrate.latest()
    .then(() => {
      return testKnex.seed.run()
    })
})

test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})


test('find | responds with a list of cats', (t) => {
  t.plan(4)

  return db.find('cats', {})
    .then((cats) => {

      cats.forEach((cat, i) => {
        t.truthy(cat.id)
        t.is(cat.name, seedCats[i].name)
      })
    })
})


