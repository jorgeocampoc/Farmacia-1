var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();
 
var conf ={
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'aspro',
 
  connectTimeout: 10000,
  acquireTimeout: 10000,
  keepAlive: true
};
 
var connection = mysql.createPool(conf);
 
module.exports = connection;



//manejo de errores 
// var mysql = require('mysql');
// var dotenv = require('dotenv');
// dotenv.config();

// var conf = {
//   host: process.env.DB_HOST || 'localhost',
//   user: process.env.DB_USER || 'root',
//   password: process.env.DB_PASSWORD || '',
//   database: process.env.DB_DATABASE || 'ASPRO',
  
//   connectTimeout: 10000,
//   acquireTimeout: 10000,
//   keepAlive: true
// };

// var connection = mysql.createPool(conf);

// function checkDatabaseConnection(callback) {
//   connection.getConnection((err, conn) => {
//     if (err) {
//       console.error('Error al conectar con la base de datos:', err);
//       callback(false, err);  
//     } else {
//       console.log('Conexión exitosa a la base de datos');
//       conn.release();  
//       callback(true, null); 
//     }
//   });
// }

// module.exports = {
//   connection,
//   checkDatabaseConnection
// };
