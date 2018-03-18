'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comments = sequelize.define('Comments', {
    commentsContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Comments.associate = function (models) {
    // associations can be defined here
  };
  return Comments;
};