'use strict';
module.exports = {
 development: {
   client: 'pg',
   connection: 'postgres://localhost/ridesDateBase',
 },
 test: {
   client: 'pg',
   connection: 'postgres://localhost/ridesDataBase',
 },

 production: {
   client: 'pg',
   connection: process.env.DATABASE_URL
 }
};
