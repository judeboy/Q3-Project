exports.up = function(knex, Promise) {
    return knex.schema.createTable('events', table => {
        table.increments('id')
        table.integer('rides_id').notNullable()
        table.foreign('rides_id').references('id').inTable('rides').onDelete('CASCADE')
        table.integer('users_id').notNullable()
        table.foreign('users_id').references('id').inTable('users').onDelete('CASCADE')
        table.timestamps(true, true)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('events')
};

//table.foreign('rides_id').references('rides.id')