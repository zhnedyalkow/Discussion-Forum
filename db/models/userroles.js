'use strict';
module.exports = (sequelize, DataTypes) => {
  var userRoles = sequelize.define('userRoles', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 10],
          msg: 'Invalid User role! It must be more than 3 and less than 10 chars!'
        },
      }
    },
  }, {});
  userRoles.associate = function (models) {
    // associations can be defined here
  };
  return userRoles;
};