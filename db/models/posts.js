'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Invalid Post title! It must be more than 3 and less than 25 chars!'
        },
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [3, 100],
          msg: 'Invalid Post content! It must be more than 3 and less than 100 chars!'
        },
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: false,
    },
    ThreadId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Threads',
        key: 'id',
      },
      allowNull: false,
    },
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
  };
  return Posts;
};