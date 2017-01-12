
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('ToutDoux', function (table){
    table.increments();
    table.string('task')

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ToutDoux')
};
