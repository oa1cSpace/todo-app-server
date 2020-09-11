const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    notNull: true
  },
  name: Sequelize.CHAR,
  surname: Sequelize.CHAR,
  email: Sequelize.CHAR,
  password: Sequelize.CHAR,
});

module.exports = User;

