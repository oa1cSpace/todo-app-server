const TasksService = require('../services/tasks.service');

class TaskController {

    static async getAllTasks(req, res) {

        const tasks = await TasksService.getAllTasks();

        console.log('before send !!! ', tasks);
        res.send(tasks);
    }

    //
    static async getTaskById(req, res) {

        const { taskId } = req.params;

        console.log(req.params);  // ==> :id
        const  task  = await TasksService.getTaskById(taskId)
        console.log('data: ', task)
        /*res.send(user);*/
        res.send(task);
    }

    //
    static async createTask(req, res) {

        const { title, description  } = req.body;

        console.log(req.body);  // ==> :id
        const  task  = await TasksService.createTask( { title, description } );
        console.log('data: ', task)
        res.send(task);
    }

    //
    static async deleteTask(req, res) {

        const { taskId } = req.params;

        console.log(req.params);  // ==> :id
        const  task  = await TasksService.deleteTask(taskId);
        console.log('DELETE... : ', task)
        /*res.send(user);*/
        res.send(task);
    }
}

module.exports = TaskController;
