'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [{
        id: 1,
        answerContent: 'I love JavaScript',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        PostId: 1,
        UserId: 1,
      },
      {
        id: 2,
        answerContent: 'I love C#',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        PostId: 2,
        UserId: 2,
      },
      {
        id: 3,
        answerContent: 'I love Java',
        createdAt: '2018-03-18 08:19:42',
        updatedAt: '2018-03-18 08:20:50',
        PostId: 3,
        UserId: 3,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Answers', null, {});
  }
};