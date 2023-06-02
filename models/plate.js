'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plate.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

      Plate.belongsTo(models.Recipe, {
        foreignKey: 'recipe_id'
      });
    }
  }
  Plate.init({
    user_id: DataTypes.INTEGER,
    recipe_id: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Plate',
  });
  return Plate;
};