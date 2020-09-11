const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const Task = sequelize.define('todo_list', {

    id: {
        type: Sequelize.INTEGER(11),
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        notNull: true
    },

    title: {
        type: Sequelize.CHAR(190),
        field: 'title',
    },

    description: {
        type: Sequelize.CHAR(255),
        field: 'description'
    },

    completed: {
        type: Sequelize.BOOLEAN,
        field: 'completed',
        defaultValue: false
    },

    editing: {
        type: Sequelize.BOOLEAN,
        field: 'editing',
        defaultValue: false
    }

});

module.exports = Task;
