const express = require('express');
const router = express.Router();
const Product = require('../models/product');



router.post('/', async (req, res) => {
    const product = new Product(req.body);
    const saved = await product.save();
    res.json(saved);
});

router.get('/', async (req, res) => {
    const { limit = 10 } = req.query;
    const products = await Product.find().limit(parseInt(limit));
    res.json(products);
});

module.exports = router;
