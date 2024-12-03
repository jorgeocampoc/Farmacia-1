const conexion = require("../database");

const getSupplierById = async (id) => {
  return new Promise((resolve, reject) => {
      let query = "select * from supplier where supplier_id = ?";
      conexion.query(query, [id], (err, results) => {
        if( err ){
          return reject(err)
        }
        if( results.length > 0 ){
          resolve(results[0]);
        }else{
          resolve({})
        }
      });

  });
};

const getAll = async() =>{
  return new Promise((resolve, reject) =>{
    let query = "select * from supplier";
    conexion.query(query, (err, results) => {
      if( err ){
        return reject(err)
      }
      resolve(results);
    });
  })
}

const changeStatus = async( id ) =>{
return new Promise((resolve, reject) =>{
  let query = "update supplier set status = !status where supplier_id = ?";
  conexion.query(query,[id], (err, results) => {
    if( err ){
      return reject(err)
    }
    resolve();
  });
})
}

const putSupplierById = async( supplier ) =>{
  return new Promise((resolve, reject) =>{
    const { supplier_id, name, phone, email, address } = supplier;
    let query = "update supplier set name=?, phone=?, email=?, address=?  where supplier_id = ?";
    conexion.query(query,[name, phone, email, address, supplier_id], (err, results) => {
      if( err ){
        return reject(err)
      }
      resolve();
    });
  })
}

const postSupplier = async( { name, phone, email, address } ) =>{
  return new Promise((resolve, reject) =>{
    let query = "insert into supplier (name, phone, email, address) values ( ?,?,?,?)  ";
    conexion.query(query,[name, phone, email, address], (err, results) => {
      if( err ){
        return reject(err)
      }
      resolve();
    });
  })
}

module.exports = { getSupplierById, getAll, changeStatus, putSupplierById,postSupplier };