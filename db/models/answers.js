'use strict';
module.exports = (sequelize, DataTypes) => {
  var Answers = sequelize.define('Answers', {
    answerContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Answers.associate = function (models) {
    // associations can be defined here
  };
  return Answers;
};