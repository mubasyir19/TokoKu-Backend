const express = require('express');
const router = express.Router();

const customer = require('../app/Customer/controller');
const category = require('../app/Category/controller');

// Authentication
router.post('/login', customer.login);
router.post('/register', customer.register);

// Category
router.get('/categories', category.listCategory);
router.get('/category/:id', category.getCategory);

module.exports = router;
