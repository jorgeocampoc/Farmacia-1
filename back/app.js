var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var product_typeRouter = require('./routes/product_type');
var presentationRouter = require('./routes/presentation');
var laboratoryRouter = require('./routes/laboratory');
var supplierRouter = require('./routes/supplier');
var batchRouter = require('./routes/batch');
var saleRouter = require('./routes/sale');

// const { checkDatabaseConnection } = require('./database');
var app = express();


// app.use((req, res, next) => {
//      checkDatabaseConnection((isConnected, err) => {
//        if (!isConnected) {
//          return res.status(503).json({ msg: 'Service unavailable, database connection failed.' });
//        }
//        next();
//      });
//    });


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product_type', product_typeRouter);
app.use('/presentation', presentationRouter);
app.use('/laboratory', laboratoryRouter);
app.use('/supplier', supplierRouter);
app.use('/batch', batchRouter);
app.use('/sale', saleRouter);


module.exports = app;
