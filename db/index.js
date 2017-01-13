module.exports = function (knex) {

  return {
    find: function (table, options) {
      return knex(table).select()
    },

    findById: function (table, id) {
      return knex(table).select().then((rows) => rows[0])
    },

    insert: function (table, item) {
      return knex(table).insert(item)
    },
    edit: function (table, id) {
      return knex(table).select(id)
      .where ({id:id})
      .update ({
        complete: true
      })
      .then (()=> {
        return knex(table).select()
      })
    }
  }
}
