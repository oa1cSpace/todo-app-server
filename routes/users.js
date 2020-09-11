const UserController = require('../controller/user.controller');

/* GET users listing. */
module.exports = (app, express) => {
    const router = express.Router();

    router.post('/users', (req, res, ...args) => UserController.createUser(req, res));

    router.get('/users/:userId', (req, res, ...args) => UserController.getUserById(req, res));
    router.get('/users', (req, res, ...args) => UserController.getAllUsers(req, res));

    app.use('/', router);
};
