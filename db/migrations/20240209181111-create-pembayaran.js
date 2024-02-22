'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_metode_pembayaran: {
        type: Sequelize.STRING,
      },
      total_pembayaran: {
        type: Sequelize.INTEGER,
      },
      tanggal_pembayaran: {
        type: Sequelize.DATE,
      },
      status_pembayaran: {
        type: Sequelize.ENUM(['Gagal', 'Pending', 'Berhasil']),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pembayarans');
  },
};
