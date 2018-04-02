'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    catName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 50],
          msg: 'Invalid Category name! It must be more than 3 and less than 50 chars!'
        },
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: {
          args: [3, 200],
          msg: 'Invalid Category description! It must be more than 3 and less than 50 chars!'
        },
      }
    },
  }, {});
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};