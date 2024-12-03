var express = require("express");
var router = express.Router();
var conexion = require('../database');

router.get("/", function (req, res, next) {
    var query = "SELECT * FROM presentation";
    conexion.query(query, function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(500).send({
          error: error,
          message: "Error en la base de datos",
        });
      } else {
        console.log(results);
        res.status(200).send({
          data: results,
          message: "Listado de tipos de presentaciones",
        });
      }
    });
  });
  
  router.post('/', function (req, res, next) {
    const { name } = req.body;
  
    var query = `INSERT INTO presentation (name) 
                VALUES ("${name}");`;
  
    conexion.query(query, function (error, results, fields) {
  
      if (error) {
        console.log(error);
        res.status(500).send({
          error: error,
          message: 'Error en realizar la peticion'
        })
  
      } else {
        console.log(results.insertId);
        res.status(200).send({
          data: results.insertId,
          message: 'Tipo de preesentación registrado correctamente'
        });
      }
    });
  });
  
  router.put('/update/:id', function (req, res, next) {
    const { name } = req.body;
    var query = `UPDATE presentation SET name = "${name}"
                 WHERE presentation_id = ${req.params.id};`;
  
    conexion.query(query, function (error, results, fields) {
  
      if (error) {
        console.log(error);
        res.status(500).send({
          error: error,
          message: 'Error en realizar la peticion'
        });
  
      } else {
        console.log(results);
        res.status(200).send({
          data: results,
          message: 'Tipo de presentación actualizado correctamente'
        });
      }
    });
  });
  
  router.delete('/delete/:id', function (req, res, next) {
    
    var query = `UPDATE presentation SET state = 0 WHERE presentation_id = ${req.params.id};`;
  
    conexion.query(query, function (error, results, fields) {
      if (error) {
        console.log(error);
        res.status(500).send({
          error: error,
          message: 'Error en realizar la petición'
        });
      } else {
        console.log(req.params.id);
        res.status(200).send({
          data: req.params.id,
          message: 'Tipo de presentación eliminado lógicamente correctamente'
        });
      }
    });
  });
  
  router.get('/state/:id', function (req, res, next) {
  
    var query = `UPDATE presentation SET state = !state WHERE presentation_id = ${req.params.id};`;
  
    conexion.query(query, function (error, results, fields) {
  
      if (error) {
        res.status(500).send({
          error: error,
          message: 'Error en realizar la peticion'
        });
  
      } else {
        res.status(200).send({
          data: results,
          message: 'Estado actualizado correctamente'
        });
      }
    });
  });
  
  router.get('/actives', function (req, res, next) {
  
    var query = `SELECT * FROM presentation WHERE state = 1`;
  
    conexion.query(query, function (error, results, fields) {
  
      if (error) {
        console.log(error);
        res.status(500).send({
          error: error,
          message: 'Error en realizar la peticion'
        });
  
      } else {
        console.log(results);
        res.status(200).send({
          data: results,
          message: 'Listando tipos de presentaciones activos'
        });
      }
    });
  });
  module.exports = router;