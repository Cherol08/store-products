const express = require('express');
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controller/productController');
const router = express.Router();

router.get('/', getProducts)
.get('/:id', getProductById)
.post('/', createProduct)
.put('/:id', updateProduct)
.delete('/:id', deleteProduct)

module.exports = router;
