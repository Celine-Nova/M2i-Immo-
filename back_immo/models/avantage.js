'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Avantage.belongsToMany(models.Property, {through: models.PropertyAvantage});
      Avantage.hasMany(models.PropertyAvantage);
    }
  };
  Avantage.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avantage',
  });
  return Avantage;
};