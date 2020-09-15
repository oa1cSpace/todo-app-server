'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Task.init({
        title: {
            type: DataTypes.STRING,
            defaultValue: "",
        },

        userId: {
            type: DataTypes.BIGINT(11),
            field: 'userId',
            allowNull: true,
        },

        description: {
            type: DataTypes.STRING,
            field: 'description',
        },
        editing: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            field: 'editing',
        },
        completed: {
            defaultValue: false,
            type: DataTypes.BOOLEAN,
            field: 'completed',
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'createdAt',
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updatedAt',
        }


    }, {
        sequelize,
        modelName: 'Task',
    });
    return Task;
};
