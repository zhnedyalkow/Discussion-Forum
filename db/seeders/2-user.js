'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                id: 1,
                email: 'zh.nedyalkow@gmail.com',
                username: 'zh.nedyalkow',
                password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
                firstName: 'Zhitomir',
                lastName: 'Oreshenski',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 1,
            },
            {
                id: 2,
                email: 'mirelasteve@abv.bg',
                username: 'mirela',
                password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
                firstName: 'Mirela',
                lastName: 'Tsvetkova',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 1,
            },
            {
                id: 3,
                email: 'valios2@hotmail.com',
                username: 'valio2',
                password: '$2a$10$k6jB0bjpyOSI6b7PD7cbbepqr69DnGSgvi0m4p4M4aXYzJ6RN4ENS',
                firstName: 'valentin',
                lastName: 'anchev',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 1,
            },
            {
                id: 4,
                email: 'anonymous@hotmail.com',
                username: 'anonymous',
                password: '123456',
                firstName: 'anonymous',
                lastName: 'anonymous',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 3,
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};