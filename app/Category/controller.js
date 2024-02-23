const { kategori, produk } = require('../../db/models');

module.exports = {
  listCategory: async (req, res, next) => {
    try {
      const categories = await kategori.findAll({
        attributes: ['id', 'nama_kategori'],
        include: produk,
      });

      res.status(200).json({
        message: 'Success get categories',
        length: categories.length,
        data: categories,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  getCategory: async (req, res, next) => {
    try {
      const { id } = req.params;

      const category = await kategori.findOne({
        where: { id: id },
        include: produk,
      });

      res.status(200).json({
        message: `Success get data category ${category.nama_kategori}`,
        data: category,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};
