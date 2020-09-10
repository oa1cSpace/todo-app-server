const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
    tableName: 'users'
});



/*knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable().unique().primary();
    table.string('name', 128);
    table.string('email', 128);
    table.string('login', 128);
    table.timestamps();
})

const User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,

});*/



module.exports = User;
