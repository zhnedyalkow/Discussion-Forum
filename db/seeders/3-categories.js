'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      id: 1,
      catName: 'Cars',
      description: 'Old cars',
      createdAt: '2018-03-18 08:19:42',
      updatedAt: '2018-03-18 08:20:50',
    },
    // {
    //   id: 2,
    //   catName: 'Garden',
    //   description: 'Flowers and Yard',
    //   createdAt: '2018-03-18 08:19:42',
    //   updatedAt: '2018-03-18 08:20:50',
    // },
    // {
    //   id: 3,
    //   catName: 'Cars',
    //   description: 'Old cars',
    //   createdAt: '2018-03-18 08:19:42',
    //   updatedAt: '2018-03-18 08:20:50',
    // }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
