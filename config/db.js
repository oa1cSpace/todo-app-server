const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize('todo_list_DB', 'brad', 'Qwerty12345.', {
    host: 'localhost',
    dialect: 'mysql'
});




/*TEST CONNECTION*/
/*async function f() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

f()*/

module.exports = sequelize;
