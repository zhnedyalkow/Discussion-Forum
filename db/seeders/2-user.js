'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
                id: 1,
                email: 'zh.nedyalkow@gmail.com',
                username: 'zh.nedyalkow',
                password: '12345',
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
                password: '12345',
                firstName: 'Mirela',
                lastName: 'Tsvetkova',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 2,
            },
            {
                id: 3,
                email: 'valios2@hotmail.com',
                username: 'valio2',
                password: '12345',
                firstName: 'valentin',
                lastName: 'anchev',
                createdAt: '2018-03-18 08:19:42',
                updatedAt: '2018-03-18 08:20:50',
                userRoleId: 3,
            },
            {
                id: 4,
                email: 'anonymous@hotmail.com',
                username: 'anonymous',
                password: '12345',
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