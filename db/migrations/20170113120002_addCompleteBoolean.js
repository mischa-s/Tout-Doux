
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('ToutDoux', function (table){
    table.boolean("complete");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('ToutDoux', function (table) {
  table.dropColumn('complete');
  })
};
