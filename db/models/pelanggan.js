'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pelanggan.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama_pelanggan: DataTypes.STRING,
    alamat: DataTypes.STRING,
    no_telepon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pelanggan',
  });
  return pelanggan;
};