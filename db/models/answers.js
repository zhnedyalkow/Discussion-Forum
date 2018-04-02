'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answers = sequelize.define('Answers', {
    answerContent: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [3, 200],
          msg: 'Invalid Answer content! It must be more than 3 and less than 200 chars!'
        },
      }
    },
    PostId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts',
        key: 'id',
      },
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
  }, {});
  Answers.associate = function (models) {
    // associations can be defined here
  };
  return Answers;
};