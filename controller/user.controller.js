const UsersService = require('../services/users.service');

class UserController {

    // method of controller which gets all users form table
    static async getAllUsers(req, res) {

        const users = await UsersService.getUsers();

        console.log('before send !!! ', users);
        res.send(users);

    }

    //
    static async getUserById(req, res) {

        const { userId } = req.params;

        console.log(req.params);  // ==> :id
        const  user  = await UsersService.getUserById(userId)
        console.log('data: ', user)
        /*res.send(user);*/
        res.send(user);
    }

    //
    static async createUser(req, res) {

        const { name, surname, email, password } = req.body;

        console.log(req.body);  // ==> :id
        const  user  = await UsersService.createUser( { name, surname, email, password } );
        console.log('data: ', user)
        /*res.send(user);*/
        res.send(user);
    }
}

module.exports = UserController;
