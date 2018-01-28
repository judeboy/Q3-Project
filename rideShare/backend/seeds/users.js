
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
<<<<<<< HEAD
        { id: 1,
          username: 'judeboy',
          email: 'judahtrimmer@gmail.com',
          phone_number:'555-555-5555',
          password: 'beans',
          salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        },
        { id: 2,
          username: 'Bishal',
          email: 'lxixchg@gmail.com',
          phone_number:'555-555-5555',
=======
        { id: 1, 
          username: 'judeboy',
          email: 'judahtrimmer@gmail.com',
          password: 'beans',
          salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        },
        { id: 2, 
          username: 'Bishal',
          email: 'lxixchg@gmail.com',
>>>>>>> fc3aaece36d7d56851f7c7f52bd133145127baf7
          password: 'packers',
          salt: '$2a$04$TW0dZf8ulcaQsatUvoUU2e'
        },
      ]);
    });
};
<<<<<<< HEAD
=======

>>>>>>> fc3aaece36d7d56851f7c7f52bd133145127baf7
