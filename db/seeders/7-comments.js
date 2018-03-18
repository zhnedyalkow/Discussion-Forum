'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
        id: 1,
        commentsContent: 'Can you say something?',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        answerId: 1,
      },
      {
        id: 2,
        commentsContent: 'Can you say something?',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        answerId: 2,
      },
      {
        id: 3,
        commentsContent: 'Can you say something?',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        answerId: 3,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};