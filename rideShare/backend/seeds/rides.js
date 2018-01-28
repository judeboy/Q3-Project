
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rides').del()
    .then(function () {
      // Inserts seed entries
      return knex('rides').insert([
        {id: 1,
        date_time:'feb,1',
        venue_name:'Red Rocks',
        address:'Golden,CO',
        city: 'Golden',
        state: 'CO',
        artist:'Dave Matthews',
        departing_from: 'Denver',
        departing_time:'8oclcok',
        number_seats: 2,
        comments:'watch ur shit',
        name:'judah',
        phone_number:'555-555-5555',
        email:'juda@aol.com'

      },

      ]);
    });
};
