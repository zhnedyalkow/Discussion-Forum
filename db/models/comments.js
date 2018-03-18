'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    commentsContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AnswerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Answers',
        key: 'id',
      },
      allowNull: false,
    },
  }, {});
  Comments.associate = function (models) {
    // associations can be defined here
  };
  return Comments;
};