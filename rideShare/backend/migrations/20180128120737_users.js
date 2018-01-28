exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username').notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('salt',30).notNullable()
        table.timestamps(true, true)
    })
};
      
exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
