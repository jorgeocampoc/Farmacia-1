const express = require('express');
const router = express.Router();

const { deleteSale,getSale,listSales,updateSale,registerSale } = require('../controller/sale');

router.patch('/:id',deleteSale)
router.get('/:id',getSale)
router.get('/',listSales)
router.post('/',registerSale)
router.put('/',updateSale)

module.exports = router;           