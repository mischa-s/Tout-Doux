const test = require('ava')
const Store = require('../../client/store')

test ('displays tasks on index page', (t) => {
  //arrange
  t.plan(1)
  const tasks = {"ToutDoux":[{"id":1,"task":"Populate Database"},{"id":2,"task":"Make Add Function"},{"id":3,"task":"Style It!"}]}
  const store = Store(tasks)

  //act
  store.display((listOfTasks) => {
    //assert
    t.is(tasks)
  }
)


// test('calling update() notifies anylisteners with an updated model', (t) => {
//   // arrange
//   t.plan(1)
//   const model = {appName: 'Hello' }
//   const store = Store(model)
//
//   store.subscribe((updatedModel) => {
//     // assert
//     t.deepEqual(model, updatedModel)
//   })
//
//   // action
//   store.update('appName', 'snowball')
// })
