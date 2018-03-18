'use strict';
module.exports = (sequelize, DataTypes) => {
  var Threads = sequelize.define('Threads', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Threads.associate = function (models) {
    // associations can be defined here
  };
  return Threads;
};