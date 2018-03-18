'use strict';
module.exports = (sequelize, DataTypes) => {
  var answers = sequelize.define('answers', {
    answerContent: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  answers.associate = function (models) {
    // associations can be defined here
  };
  return answers;
};