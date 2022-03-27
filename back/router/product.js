const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/product');

router.post('/', ProdCtrl.createProduct);

module.exports = router;
