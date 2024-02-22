const crypto = require('crypto');

module.exports = {
  login: async (req, res) => {
    try {
    } catch (error) {}
  },
  register: async (req, res) => {
    try {
    } catch (error) {}
  },
  forgotPassword: async (req, res) => {
    /**
     * sebelumnya jangan lupa tambahin field di database:
     * resetToken
     * expireToken
     */
    // check email from database
    // handling percabangan jika tidak ada usernya
    // generate random token
    // check error jika tidak ada token
    // convert token ke hexastring
    // set token dan expire nya ke model user
    // gunakan try catch untuk menyimpan data
  },
};
