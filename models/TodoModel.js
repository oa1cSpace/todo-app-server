const knex = require('../db').knex;
const bookshelf = require('bookshelf')(knex);

const Todo = bookshelf.Model.extend({
    tableName: 'todo_list'
});

module.exports = Todo;
