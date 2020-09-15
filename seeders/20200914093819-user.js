'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */


        await queryInterface.bulkInsert('Users', [
            {
                name: 'John',
                surname: 'Doe',
                email: 'test@email',
                password: 'password',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'John',
                surname: 'Doe2',
                email: 'test@email2',
                password: 'password',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'John',
                surname: 'Doe3',
                email: 'test@email3',
                password: 'password',
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

         await queryInterface.bulkDelete('Users', null, {});

    }
};
