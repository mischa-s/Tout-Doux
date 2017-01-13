module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },

    deleteById: function (table, id) {
      return knex(table).select()
        .where({id: id})
        .del()
        .then(() => {
          return knex(table).select()
        })
    },

    insert: function (table, item) {
      return knex(table).insert(item)
        .then(() => {
          return knex(table).select()
        })
    }
  }
}
