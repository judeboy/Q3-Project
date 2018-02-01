exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
      // Inserts seed entries
      return knex('rides').insert([
        {
        user_id:1,
        concert_id:1,
        date_time:'feb,1',
        venue_name:'Red Rocks',
        venue_address:'Golden,CO',
        artists: 'bishal',
        driverName: 'malla',
        email:'juda@aol.com',
        phone:'555-555-5555',
        availableSeats: 2,
        person_address:'603 east 10st',
        departingTime:'8 AM',
        comments:'watch ur shit',
      }
      ])
      .then(function(){
        return knex.raw("SELECT setval('rides_id_seq',(SELECT MAX(id) FROM rides))")
    });
};
