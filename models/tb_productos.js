'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_productos.init({
    name: DataTypes.STRING,
    detail: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    category: DataTypes.STRING,
    isnew: DataTypes.BOOLEAN,
    issale: DataTypes.BOOLEAN,
    imgsrc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_productos',
  });
  return tb_productos;
};