'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      id: 1,
      title: 'How to buy a new car',
      content: 'lorem ipsum',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:19:50',
      userId: 1,
      ThreadId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
