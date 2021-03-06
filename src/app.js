const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
app.use(cookieParser());
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use(express.json());


app.use(errorHandler);

module.exports = app;
