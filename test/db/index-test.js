const test = require('ava')
const seedCats = require('../../db/seed-cats')

// instantiate test database and routes
const testKnex = require('knex')(require('../../knexfile').test)

const db = require('../../db')(testKnex)

test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')

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

      console.log('cats', cats)

      cats.forEach((cat, i) => {
        t.truthy(cat.id)
        t.is(cat.name, seedCats[i].name)
      })
    })
})

test('add | inserts a cat into the database', (t) => {
  t.plan(2)

  // arrange
  const tibbles = {
 //   image: 'https://files.graphiq.com/stories/t2/tiny_cat_12573_8950.jpg',
    name: 'tibbles'
  //  age: 1

  }

  // action
  return db.add('cats', tibbles)
    .then(() => {
      return testKnex('cats')
        .where('name', tibbles.name)
        .select()
    })
    .then((rows) => { // [{}, {}]

      // assert
      t.is(rows.length === 1)
      t.is(rows[0].name, tibbles.name)
     // t.is(rows[0].age, tibbles.age)
    })
})


