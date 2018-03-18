'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
  };
  return Posts;
};