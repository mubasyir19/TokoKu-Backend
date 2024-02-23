const express = require('express');
const router = express.Router();

const customer = require('../app/Customer/controller');
const category = require('../app/Category/controller');
const product = require('../app/Product/controller');

// Authentication
router.post('/login', customer.login);
router.post('/register', customer.register);

// Category
router.get('/categories', category.getAllCategory);
router.get('/category/:id', category.getCategory);

// Product
router.get('/products', product.getAllProducts);
router.get('/product/:id', product.getProduct);

module.exports = router;
