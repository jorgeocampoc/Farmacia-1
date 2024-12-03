const { request: req, response: res} = require("express");
const conexion = require("../database");
const { getSupplierById, getAll,changeStatus,putSupplierById, postSupplier } = require("../services/supplier");
const { validateEmptyObject,validateEmptyArray,handleError } = require('../handlleError/error')


const getSuppliers = async (req, res) => {
  try {
    const results = await getAll();
    res.status(200).json({
      results
    });
  } catch (err) {
    handleError(err, res)
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const supplier = await getSupplierById(req.params.id);
    const verifySupplier = validateEmptyObject( supplier,res,'Supplier not found' )
    if( verifySupplier ) return;
   await changeStatus( req.params.id );
    res.status(201).json({
      currentStatus:(supplier.status == 1)? '0':'1'
    })
  } catch (err) {
    handleError(err, res)
  }
};

const getById =async (req, res) =>{
  try {
    const supplier = await getSupplierById(req.params.id);
    const verifySupplier = validateEmptyObject( supplier,res,'Supplier not found' )
    if( verifySupplier ) return;
    res.status(200).json({
    supplier
  })
  } catch (err) {
    handleError(err, res)
  }
}

const putSupplier = async(req, res) =>{
  try {
    const supplier = await getSupplierById(req.body.supplier_id);
    const verifySupplier = validateEmptyObject( supplier,res,'Supplier not found' )
    if( verifySupplier ) return;
    await putSupplierById( req.body );
    res.status(200).json({
    msg:'Supplier updated'
  })
  } catch (err) {
    handleError(err, res)
  }
}

const registerSupplier =  async(req, res) =>{
  try {
    await postSupplier(req.body)
    res.status(200).json({
    status:true
  })
  } catch (err) {
    handleError(err, res)
  }
}

module.exports = {
  deleteSupplier,
  getSuppliers,
  getById,
  putSupplier,
  registerSupplier
};
