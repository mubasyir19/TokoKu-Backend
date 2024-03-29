'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      produk.belongsTo(models.kategori, {
        foreignKey: 'id_kategori',
      });
    }
  }
  produk.init(
    {
      nama_produk: DataTypes.STRING,
      deskripsi: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      stok: DataTypes.INTEGER,
      foto_produk: DataTypes.STRING,
      id_kategori: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'produk',
    }
  );
  return produk;
};
