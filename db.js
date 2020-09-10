const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'brad',
        password: 'Qwerty12345.',
        database: 'todo_list_DB',
        charset: 'utf8mb4_general_ci',
    }
});
module.exports.knex = knex;
