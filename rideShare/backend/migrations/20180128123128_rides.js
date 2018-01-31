
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rides',table =>{
    table.increments('id')
    table.integer('user_id')
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    table.integer('concert_id')
    table.string('date_time')
    table.string('venue_name')
    table.string('venue_address')
    table.string('artists')
    table.string('driverName')
    table.string('email')
    table.string('phone')
    table.string('availableSeats')
    table.string('person_address')
    table.string('departingTime').notNullable()
    table.string('comments').notNullable()
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('rides')
};



//Api Fields

// table.string('date_time')
// table.string('venue_name')
// table.string('address')
// table.string('artist')


//User provided fields

// username:req.body.username,
// address:req.body.username,
// city:req.body.city,
// state:req.body.state,
// departing_time:req.body.departing_time,
// number_seats:req.body.number_seats,
// comments:req.body.comments,
// phone_number:req.body.number,
// email:req.body.email
