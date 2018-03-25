'use strict';
const bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        len: {
          args: [10, 25],
          msg: 'Invalid email! It must contains more than 10 characters (e.g. wild.wezyr@gmail.com)!'
        },
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Invalid username! Username must be more than 3 and less than 25 characters!'
        },
      },
      unique: {
        args: true,
        msg: 'User name already in use!'
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 25],
          msg: 'Invalid password! Password must be more than 6 and less than 25 characters!'
        },
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Invalid first name! It must be more than 3 and less than 25 characters!'
        },
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Invalid last name! Password must be more than 3 and less than 25 characters!'
        },
      }
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

  Users.beforeCreate(async (user, options) => {
    const hashPassword = await cryptPassword(user.password);
    user.password = hashPassword;
  })

  const cryptPassword = (password) => {
    console.log('cryptPassword' + password);
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(10, function(err, salt) {

          // Encrypt password using bcrypt module
          if (err) {
            return reject(err);
          }

          bcrypt.hash(password, salt, null, function(err, hash) {
            if (err) {
              return reject(err);
            }

            return resolve(hash);
          });
        })
    })
  }
  return Users;
};