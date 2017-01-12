
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ToutDoux').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('ToutDoux').insert({id: 1, task: 'Populate Database'}),
        knex('ToutDoux').insert({id: 2, task: 'Make Add Function'}),
        knex('ToutDoux').insert({id: 3, task: 'Style It!'})
      ]);
    });
};
