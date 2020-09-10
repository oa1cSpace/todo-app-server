const UserController = require('../controller/user.controller');

/* GET users listing. */
module.exports = (app, express) => {
    const router = express.Router();

    router.get('/users/:id', (req, res, ...args) => UserController.getUser(req, res));
    router.get('/users', (req, res, ...args) => UserController.getAll(req, res));

    app.use('/', router);
};
