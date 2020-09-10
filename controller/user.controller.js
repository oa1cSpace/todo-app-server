const UsersService = require('../services/users.service');

class UserController {
    // method of controller
    static async getAll(req, res) {
        console.log('GET ALL   ....');

        const users = await UsersService.getUsers();

        console.log('before send !!! ', users);
        res.send(users);


    }

    //
    static async getUser(req, res) {
        console.log('GET ALL   ....');

        console.log(req.params);  // ==> :id
        const users = await UsersService.getUsers();

        res.send('respond with a resource');
    }


}

module.exports = UserController;
