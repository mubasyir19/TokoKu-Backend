const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const { pelanggan } = require('../../db/models');

module.exports = {
  login: async (req, res, next) => {
    const { usernameEmail, password } = req.body;
    try {
      let user;
      if (usernameEmail.includes('@')) {
        user = await pelanggan.findOne({ where: { email: usernameEmail } });
      } else {
        user = await pelanggan.findOne({ where: { username: usernameEmail } });
      }

      const checkPassword = bcrypt.compareSync(password, user.password);

      if (checkPassword) {
        const token = jwt.sign(
          {
            userLogin: {
              id: user.id,
              email: user.email,
              nama_pelanggan: user.nama_pelanggan,
              alamat: user.alamat,
              no_telepon: user.no_telepon,
            },
          },
          'secret'
        );
        res.status(200).json({
          message: 'Success Login',
          data: token,
        });
      }
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  register: async (req, res, next) => {
    const accountId = uuid.v4();
    try {
      const { email, username, password, nama_pelanggan, alamat, no_telepon, confirmPassword } = req.body;

      const checkEmail = await pelanggan.findOne({ where: { email: email } });
      if (checkEmail) {
        res.status(403).json({ message: 'Email has been registered' });
      }

      const checkUsername = await pelanggan.findOne({ where: { username: username } });
      if (checkUsername) {
        res.status(403).json({ message: 'Username has been registered' });
      }

      if (password !== confirmPassword) {
        res.status(403).json({ message: "Password and confirm password doesn't match" });
      }

      const accountRegister = await pelanggan.create({
        id: accountId,
        email,
        username,
        password: bcrypt.hashSync(password, 10),
        nama_pelanggan,
        alamat,
        no_telepon,
      });

      delete accountRegister.dataValues.password;

      res.status(201).json({
        message: 'Success signup',
        data: accountRegister,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
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
