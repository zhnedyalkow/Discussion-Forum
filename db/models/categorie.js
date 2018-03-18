'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categorie = sequelize.define('Categorie', {
    catName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {});
  Categorie.associate = function (models) {
    // associations can be defined here
  };
  return Categorie;
};