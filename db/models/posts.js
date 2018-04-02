'use strict';
module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: 'Invalid Post title! It must be more than 3 and less than 50 chars!'
        },
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [3, 200],
          msg: 'Invalid Post content! It must be more than 3 and less than 200 chars!'
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