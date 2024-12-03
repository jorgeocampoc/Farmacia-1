const conexion = require("../database");

const changeStatus = async (id) => {
  return new Promise((resolve, reject) => {
    let query = "update sale set status = !status where sale_id = ?";
    console.log(query);
    conexion.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
const getSaleById = async (id) => {
  return new Promise((resolve, reject) => {
    let query = "select * from sale where sale_id = ?";
    conexion.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        reject({});
      }
    });
  });
};
const getAllSales = async () => {
  return new Promise((resolve, reject) => {
    let query = "select * from sale";
    conexion.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};

const putSale = async ({
  customer_name,
  customer_dni,
  total,
  seller_id,
  id_cliente,
  sale_id,
}) => {
  
  return new Promise((resolve, reject) => {
    let query =
      "update sale set customer_name=?, customer_dni=?, total=?, seller_id=?, id_cliente=? where sale_id=?";
    conexion.query(
      query,
      [customer_name, customer_dni, total, seller_id, id_cliente, sale_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};


module.exports = { changeStatus, getSaleById, getAllSales, putSale };
