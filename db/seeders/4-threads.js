'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Threads', [{
      id: 1,
      title: 'Wheels',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:20:50',
      UserId: 1,
      CategoryId: 1,
    }, {
      id: 2,
      title: 'Flower Pots',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:20:50',
      UserId: 2,
      CategoryId: 2,
      }, {
        id: 3,
        title: 'World of Warcraft',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        UserId: 3,
        CategoryId: 3,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Threads', null, {});
  }
};