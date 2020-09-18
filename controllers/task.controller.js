const db = require('../models');
const Task = db.Task;

class TaskController {

    static async getAllTasks(req, res) {
        console.warn('======[ @@ {getAllTasks}]======>', req.userId);
        try {
            const tasks = await Task.findAll(
                {
                     where: {
                         userId: req.userId
                     }
                });
            console.log('======[ @@ tasks ]======> ', JSON.stringify(tasks));
            res.send(tasks);
        } catch (err) {
            console.log('[ something went wrong with getting all tasks....] YOU GOT AN ERROR !!!', error);
        }
    }

    //
    static async getTaskById(req, res) {
        const {taskId} = req.params;
        console.log(req.params);  // ==> :taskId
        const task = await Task.findOne({where: {taskId}}).catch((error) => {
            console.log('[ something went wrong with getting task by id....] YOU GOT AN ERROR !!!', error);
        });
        console.log('data: ', task)
        res.send(task);
    }

    //
    static async createTask(req, res) {
        const {title} = req.body;
        const {userId} = req;
        console.log(req.body);  // ==> :id
        try {
            const task = await Task.create({title, userId});
            res.send(task);
        } catch (error) {
            console.log('[ something went wrong with creating task.... ] YOU GOT AN ERROR !!!', error);
        }
    }

    //
    static async deleteTask(req, res) {
        const {taskId} = req.params;
        console.error('=====[ Task\'s ID to delete ]========> ', taskId);
        console.log(req.params);  // ==> :id
        try {
            const response = await Task.destroy({where: {id: taskId}});

            if (response === 1) {
                return res.send({
                    taskId,
                    status: true,
                });
            }

            return res.send({
                status: false
            });
        } catch (err) {
            console.log('[something went wrong with deleting task....] YOU GOT AN ERROR !!!', err);
        }
    }

    static async completedTask(req, res) {
        const {completed, id} = req.body;
        // const {taskId} = req.params;
        try {
            const response = await Task.upsert({completed, id });      // completed !

            if (!response) {
                return res.send({
                    status: false
                });
            }
            return res.send({
                status: true,
            });
        } catch (err) {
            console.log('[something went wrong with completedTask task....] YOU GOT AN ERROR !!!', err);
        }

    }

    static async editTask(req, res) {
        const {title} = req.body;
        const {taskId} = req.params;
        try {
            console.log('===[EDITING ]============> ', Task.editing );
            const response = await Task.upsert({title, id: taskId, editing: true});
            console.log('===[EDITING (response) 2 ]============> ', response );

            if (!response) {
                return res.send({
                    status: false
                });
            }
            return res.send({
                status: true,
            });
        } catch (err) {
            console.log('[something went wrong with editTask task....] YOU GOT AN ERROR !!!', err);
        }

    }

}

module.exports = TaskController;
