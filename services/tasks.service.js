const sequelize = require('../config/db');
const Task = require('../model/task');

class TasksService {

    //GET
    static getAllTasks() {
        return sequelize.sync({force: false})
            .then(() => {
                console.log(`Database & tables created!`);
                return Task.findAll();
            });
    }

    //GET
    static getTaskById(id) {
        return sequelize.sync({force: false})
            .then(() => {
                return Task.findOne({where: {id}});
            })
    }

    // POST
    static createTask(data) {
        return sequelize.sync({force: false})
            .then(() => {
                return Task.create(data);
            }).catch((error) => {
                console.log('YOU GOT ERROR !!!', error);
            })
    }

    // DELETE
    static deleteTask(id) {
        return sequelize.sync({force: false})
            .then(() => {
                return Task.delete({where: {id}});
            })
    }

}

module.exports = TasksService;
