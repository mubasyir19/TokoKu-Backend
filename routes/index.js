const express = require('express');
const router = express.Router();

const customer = require('../app/Customer/controller');

// Authentication
router.post('/login', customer.login);
router.post('/register', customer.register);

module.exports = router;
