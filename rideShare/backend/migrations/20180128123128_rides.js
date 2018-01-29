
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rides',table =>{
  table.increments('id')
  table.integer('driver_id')
  table.foreign('driver_id').references('id').inTable('users').onDelete('CASCADE')
  table.string('date_time')
  table.string('venue_name')
  table.string('address')
  table.string('city')
  table.string('state')
  table.string('artist')
  table.string('departing_from')
  table.string('departing_time').notNullable()
  table.integer('number_seats').notNullable()
  table.string('comments')
  table.string('name')
  table.string('phone_number')
  table.string('email')
})
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('rides')
};
