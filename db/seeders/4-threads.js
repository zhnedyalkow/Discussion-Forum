'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Threads', [{
            id: 1,
            title: 'Вентил за безкамерна капла',
            createdAt: '2018-03-18 08:19:42',
            updatedAt: '2018-03-18 08:20:50',
            UserId: 1,
            CategoryId: 1,
        }, {
            id: 2,
            title: 'Какво да гледаме когато свършат любимите сериали',
            createdAt: '2018-03-18 08:19:42',
            updatedAt: '2018-03-18 08:20:50',
            UserId: 2,
            CategoryId: 2,
        }, {
            id: 3,
            title: 'Отворен публичен дебат на страницата на Народното събрание ? ',
            createdAt: '2018-03-18 08:19:42',
            updatedAt: '2018-03-18 08:20:50',
            UserId: 3,
            CategoryId: 3,
        }, {
            id: 4,
            title: 'Linux - Info, Guides, News, HOWTOs ...',
            createdAt: '2018-03-18 08:19:42',
            updatedAt: '2018-03-18 08:20:50',
            UserId: 3,
            CategoryId: 4,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Threads', null, {});
    }
};