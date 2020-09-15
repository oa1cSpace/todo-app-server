const TaskController = require('../controllers/task.controller');

module.exports = (app, express) => {
    const router = express.Router();

    router.post('/task/:taskId/complete', (req, res, ...args) => TaskController.completedTask(req, res));
    router.post('/task/:taskId/edit', (req, res, ...args) => TaskController.editTask(req, res));
    router.post('/task/:taskId', (req, res, ...args) => TaskController.deleteTask(req, res));
    router.post('/task', (req, res, ...args) => TaskController.createTask(req, res));

    router.get('/task/:taskId', (req, res, ...args) => TaskController.getTaskById(req, res));
    router.get('/tasks', (req, res, ...args) => TaskController.getAllTasks(req, res));

    app.use('/', router);
};
