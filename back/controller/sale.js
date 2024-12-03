const { request: req, response: res} = require("express");
const { changeStatus, getSaleById, getAllSales, putSale} = require("../services/sale");
const { validateEmptyObject,handleError } = require('../handlleError/error')

const deleteSale = async (req, res) => {
     try {
       const sale = await getSaleById(req.params.id);
       const verifySale = validateEmptyObject( sale,res,'Sale not found' )
       if( verifySale ) return;
      await changeStatus( req.params.id );
       res.status(201).json({
         currentStatus:(sale.status == 1)? '0':'1'
       })
     } catch (err) {
       handleError(err, res)
     }
   };

const getSale = async(req, res) =>{
  try {
    const sale = await getSaleById(req.params.id);
    const verifySale = validateEmptyObject( sale,res,'Sale not found' )
    if( verifySale ) return;
   await changeStatus( req.params.id );
    res.status(201).json({
      currentStatus:(sale.status == 1)? '0':'1'
    })
  } catch (err) {
    handleError(err, res)
  }
}

const listSales = async(req, res) =>{
  try {
    const sales = await getAllSales();
    res.status(200).json({
      results:sales
    })
  } catch (err) {
    handleError(err, res)
  }
}

const updateSale = async(req, res) =>{
  try {
    const sale = await getSaleById(req.body.sale_id)
    const verifySale = validateEmptyObject( sale,res,'Sale not found' )
    if( verifySale ) return;
    await putSale(req.body);
    res.status(201).json({
      status:true
    })
  } catch (err) {
    handleError(err, res)
  }
}

const registerSale =  async(req, res) =>{
    
}
   
module.exports = {
    deleteSale,
     getSale,
     updateSale,
     listSales,
     registerSale
   };
   