const { produk, kategori } = require('../../db/models');

module.exports = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await produk.findAll({
        include: {
          model: kategori,
          attributes: ['id', 'nama_kategori'],
        },
      });

      res.status(200).json({
        message: 'success get data',
        data: products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
      });
      next(error);
    }
  },
  getProduct: async (req, res, next) => {
    try {
      const { id } = req.params;

      const product = await produk.findOne({
        where: { id },
        include: {
          model: kategori,
          attributes: ['id', 'nama_kategori'],
        },
      });

      res.status(200).json({
        message: 'success get daat',
        data: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error.message,
      });
      next(error);
    }
  },
};
