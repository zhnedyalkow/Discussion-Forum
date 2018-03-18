'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Users.associate = (models) => {
    // associations can be defined here
    const {
      Threads,
      Posts,
      Answers,
      userRoles,
      Comments,
      Categories,
    } = models;

    Threads.belongsTo(Users);
    Posts.belongsTo(Users);
    Answers.belongsTo(Posts);
    Users.belongsTo(userRoles);
    Answers.belongsTo(Users);
    Comments.belongsTo(Answers);
    Threads.belongsTo(Categories);
    Posts.belongsTo(Threads);
  };
  return Users;
};