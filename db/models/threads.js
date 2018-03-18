'use strict';
module.exports = (sequelize, DataTypes) => {
  var Threads = sequelize.define('Threads', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories',
        key: 'id',
      },
      allowNull: false,
    },
    
  }, {});
  Threads.associate = function (models) {
    // associations can be defined here
  };
  return Threads;
};