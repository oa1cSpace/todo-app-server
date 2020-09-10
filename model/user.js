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
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = User;

/*
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'users' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();
*/
