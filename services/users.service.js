const sequelize = require('../config/db');
const User = require('../model/user');

class UsersService {
    // all methods here

    static getUsers() {
        return sequelize.sync({force: false})
            .then(() => {
                console.log(`Database & tables created!`);
                return User.findAll();
            });
    }

    static getUserById(id) {
        return sequelize.sync({force: false})
            .then(() => {
                return User.findOne({attributes:['name', 'surname', 'email']},{ where: {id}});
            })
    }

    static createUser(data) {
        return sequelize.sync({force: false})
            .then(() => {
                return User.create(data);
            }).catch((error) => {
                console.log('YOU GOT ERROR !!!', error);
            })
    }
}

module.exports = UsersService;
