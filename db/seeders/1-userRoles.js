'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userRoles', [{
      id: 1,
      name: 'admin',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:19:50',
    },
    {
      id: 2,
      name: 'user',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:19:50',
    },
    {
      id: 3,
      name: 'guest',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:19:50',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userRoles', null);
  }
};
