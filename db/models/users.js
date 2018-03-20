'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
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
    userRoleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'userRoles',
        key: 'id',
      },
      allowNull: false,
    },
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
    const {
      userRoles,
      Threads,
      Posts,
      Comments,
      Categories,
      Answers,
    } = models;

    Users.belongsTo(userRoles, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Threads.belongsTo(Users, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Posts.belongsTo(Users, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Answers.belongsTo(Posts, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Answers.belongsTo(Users, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Comments.belongsTo(Answers, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Threads.belongsTo(Categories, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
    Posts.belongsTo(Threads, {
      foreignKey: {
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };
  return Users;
};