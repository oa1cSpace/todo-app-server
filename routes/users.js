const UserController = require('../controllers/user.controller');
// const authenticateToken = require('../middlewares/authenticateToken');

/* GET users listing. */
module.exports = (app, express) => {
    const router = express.Router();

    router.post('/users/login', (req, res, ...args) => UserController.loginUser(req, res));
    router.post('/users', (req, res, ...args) => UserController.createUser(req, res));

// authenticateToken

    router.get('/users/:userId', (req, res, ...args) => UserController.getUserById(req, res));
    router.get('/users', (req, res, ...args) => UserController.getAllUsers(req, res));

    app.use('/', router);
};
