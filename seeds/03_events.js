
exports.seed = function(knex, Promise) {
    return knex('events').insert([
        {   
            id: 1, 
            rides_id: 1,
            users_id: 2,
        },
    ])
    .then(function () {
        return knex.raw("SELECT setval('events_id_seq', (SELECT MAX(id) FROM events))");
    });
};
