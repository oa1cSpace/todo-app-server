const db = require('../models');
const User = db.User;

class UserController {

    // method of controllers which gets all users form table
    static async getAllUsers(req, res) {
        const users = await User.findAll();
        console.log('before send !!! ', users);
        res.send(users);
    }

    //
    static async getUserById(req, res) {
        const {id} = req.params;
        console.log(req.params);  // ==> :id
        const user = await User.findOne({attributes:['name', 'surname', 'email']}, { where: {id} });
        console.log('data: ', user)
        /*res.send(user);*/
        res.send(user);
    }

    //
    static async createUser(req, res) {
        console.log(req.body);  // ==> :id
        const {name, surname, email, password} = req.body;
        const user = await User.create({name, surname, email, password});
        console.log('data: ', user)
        /*res.send(user);*/
        res.send(user);
    }

}

module.exports = UserController;
