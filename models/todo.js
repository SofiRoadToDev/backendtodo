'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ToDO.init({
    title: DataTypes.STRING(15),
    description: DataTypes.STRING(200),
    image:DataTypes.STRING(50),
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ToDO',
  });
  return ToDO;
};