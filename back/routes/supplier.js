const express = require('express');
const router = express.Router();

const { deleteSupplier,getSuppliers,getById,putSupplier,registerSupplier } = require('../controller/supplier');

router.patch('/:id',deleteSupplier)
router.get('/:id',getById)
router.get('/',getSuppliers)
router.put('/',putSupplier)
router.post('/',registerSupplier)


module.exports = router;           