'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Threads', [{
      id: 1,
      title: 'Cars',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:20:50',
      UserId: 1,
      CategoryId: 1,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Threads', null, {});
  }
};
