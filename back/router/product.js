const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/product');

router.post('/', ProdCtrl.createProduct);
router.get('/:id', ProdCtrl.getOneProduct);
router.get('/', ProdCtrl.getAllproducts);

module.exports = router;
