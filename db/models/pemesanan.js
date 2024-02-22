'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pemesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pemesanan.init({
    id_pelanggan: DataTypes.STRING,
    id_pembayaran: DataTypes.STRING,
    tanggal_pemesanan: DataTypes.DATE,
    status_pemesanan: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'pemesanan',
  });
  return pemesanan;
};