
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, 
          username: 'judeboy',
          email: 'judahtrimmer@gmail.com',
          password: 'beans',
          salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'
        },
        { id: 2, 
          username: 'Bishal',
          email: 'lxixchg@gmail.com',
          password: 'packers',
          salt: '$2a$04$TW0dZf8ulcaQsatUvoUU2e'
        },
      ]);
    });
};

