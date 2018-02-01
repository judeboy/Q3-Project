
exports.seed = function(knex, Promise) {
    return knex('confirmedrides').insert([
        {
          id:1,
          user_id:1,
          concert_id:1,
          date_time:'2017-02-18 8 PM',
          venue_name: 'robot house',
          artists: 'Bob',
          driverName: 'Bob',
          email: 'bob@bob.com',
          phone: '1234456788',
          departingTime: '8 AM'
        },
    ])
    .then(function () {
        return knex.raw("SELECT setval('confirmedrides_id_seq', (SELECT MAX(id) FROM confirmedrides))");
    });
};
