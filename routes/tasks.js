const TaskController = require('../controller/task.controller');

module.exports = (app, express) => {
    const router = express.Router();

    router.post('/task', (req, res, ...args) => TaskController.createTask(req, res));

    router.get('/tasks/:taskId', (req, res, ...args) => TaskController.getTaskById(req, res));
    router.get('/tasks', (req, res, ...args) => TaskController.getAllTasks(req, res));

    app.use('/', router);
};
