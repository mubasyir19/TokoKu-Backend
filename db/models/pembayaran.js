'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pembayaran.init({
    id_metode - pembayaran: DataTypes.STRING,
    total_pembayaran: DataTypes.INTEGER,
    tanggal_pembayaran: DataTypes.DATE,
    status_pembayaran: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'pembayaran',
  });
  return pembayaran;
};