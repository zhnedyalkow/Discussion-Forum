'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    catName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [3, 25],
          msg: 'Invalid Category name! It must be more than 3 and less than 100 characters!'
        },
      }
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {});
  Categories.associate = function (models) {
    // associations can be defined here
  };
  return Categories;
};