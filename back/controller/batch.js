const { request: req, response: res} = require("express");
const { changeStatus, getBatchById,postBatch, putBatch, getAllBatches} = require("../services/batch");
const { validateEmptyObject,handleError } = require('../handlleError/error')

const deleteBatch = async (req, res) => {
     try {
       const batch = await getBatchById(req.params.id);
       const verifyBatch = validateEmptyObject( batch,res,'Batch not found' )
       if( verifyBatch ) return;
      await changeStatus( req.params.id );
       res.status(201).json({
         currentStatus:(batch.status == 1)? '0':'1'
       })
     } catch (err) {
       handleError(err, res)
     }
   };
 const registerBatch =async (req, res) =>{
  try {
    await postBatch(req.body);
    res.status(201).json({
      status:true
    })
  } catch (err) {
    handleError(err, res)
  }
 } 
 
 const editBatch =async (req, res) =>{
  try {
    const batch = await getBatchById(req.body.batch_id);
    const verifyBatch = validateEmptyObject( batch,res,'Batch not found' )
    if( verifyBatch ) return;
    await putBatch( req.body );
     res.status(201).json({
       status:true,
     })
  } catch (err) {
    handleError(err, res)
  }
 } 

 const getBatch = async (req, res) =>{
  try {
    const batch = await getBatchById(req.params.id);
    const verifyBatch = validateEmptyObject( batch,res,'Batch not found' )
    if( verifyBatch ) return;
     res.status(200).json({
       batch,
     })
  } catch (err) {
    handleError(err, res)
  }
 }

 const listBatches = async (req, res) =>{
  try {
    const batches = await getAllBatches();
     res.status(200).json({
       results:batches,
     })
  } catch (err) {
    handleError(err, res)
  }
 }
   
module.exports = {
     deleteBatch,
     registerBatch,
     editBatch,
     getBatch,
     listBatches
   };
   