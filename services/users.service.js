const sequelize = require('../config/db');
const User = require('../model/user');

class UsersService {
    // all methods
    static getUsers() {
        return sequelize.sync({force: false})
            .then(() => {
                console.log(`Database & tables created!`);
                return User.findAll({attributes:['id']});
            });
    }

    /*static getUserById(id) {
        return User.MY - METHOD - HERE()
    }*/
}

module.exports = UsersService;
