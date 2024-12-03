const conexion = require("../database");

const changeStatus = async (id) => {
  return new Promise((resolve, reject) => {
    let query = "update batch set status = !status where batch_id = ?";
    conexion.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};
const getBatchById = async (id) => {
  return new Promise((resolve, reject) => {
    let query = "select * from batch where batch_id = ?";
    conexion.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      if (results.length > 0) {
        resolve(results[0]);
      } else {
        resolve({});
      }
    });
  });
};
const postBatch = async ({
  stock,
  purchase_date,
  expiration_date,
  supplier_id,
}) => {
  return new Promise((resolve, reject) => {
    let query =
      "insert into batch (stock, purchase_date, expiration_date, supplier_id) values (?,?,?,?)";
    conexion.query(
      query,
      [stock, purchase_date, expiration_date, supplier_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};

const putBatch = async ({
  stock,
  purchase_date,
  expiration_date,
  supplier_id,
  batch_id
}) => {
  return new Promise((resolve, reject) => {
    let query =
      "update  batch  set stock=?, purchase_date=?, expiration_date=?, supplier_id=? where batch_id =?";
    conexion.query(
      query,
      [stock, purchase_date, expiration_date, supplier_id, batch_id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve();
      }
    );
  });
};

const getAllBatches = async () => {
  return new Promise((resolve, reject) => {
    let query =
      "select * from batch";
    conexion.query(
      query, (err, results) => {
        if (err) {
          return reject(err);
        }
          resolve(results);    
      }
    );
  });
};

module.exports = { changeStatus, getBatchById, postBatch, putBatch, getAllBatches };
