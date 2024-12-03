const express = require('express');
const router = express.Router();

const { deleteBatch,registerBatch,editBatch,getBatch,listBatches } = require('../controller/batch');


router.patch('/:id',deleteBatch)
router.post('/',registerBatch)
router.put('/',editBatch)
router.get('/:id',getBatch)
router.get('/',listBatches)


module.exports = router;           