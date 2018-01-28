
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

      return knex('users').insert([

        { id: 1,
          username: 'judeboy',
          email: 'judahtrimmer@gmail.com',
          phone_number: '555-555-555',
          password: 'beans',
          salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        },
        { id: 2,
          username: 'Bishal',
          email: 'lxixchg@gmail.com',
          phone_number: '555-555-5555',
          password: 'packers',
          salt: '$2a$04$TW0dZf8ulcaQsatUvoUU2e'
        },
      ])
      .then(function(){
        return knex.raw("SELECT setval('rides_id_seq',(SELECT MAX(id) FROM rides))")
      })
};
