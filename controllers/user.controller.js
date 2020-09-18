const db = require('../models');
const User = db.User;

const generateAccessToken = require('../utilities/auth');

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
        res.send(user);
    }

    //
    static async createUser(req, res) {
         console.log('=== [ user id ] ======>',req.body);  // ==> :id
         const {name, surname, email, password} = req.body;
        try{
            const user = await User.create({name, surname, email, password});
            console.log('=== [ user data ] ======>', user);
            if (!user){
               return  res.send({status: false, message: '[ createUser ] USER EXISTS!'});
            }
            const token = generateAccessToken(user.id);
            res.send({token});
        }catch (err) {
            console.log(' @@@========== [ something went wrong with creating new user ] ========@@@ ');
        }
    }

    static async loginUser (req, res){
        const {name,  password} = req.body;
        console.log("=============[ loginUser ]===========>" , req.body)
        try{
            const user = await User.findOne({ where: {name, password}});
            if (!user){
                return res.send({status: false, message: '[ loginUser ] USER AUTHORIZATION FAILED!'});
            }
            const token = generateAccessToken(user.id);
            // const { password, ...args } = user
            res.send({token, user:{id:user.id, name: user.name, surname: user.surname, email: user.email}});
        }catch (err) {
            console.log(' @@@========== [ something went wrong with loginUser ] ========@@@ ');
        }
    }
}

module.exports = UserController;
