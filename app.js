const express = require('express');
const productRoutes = require('./routes/productRoutes');
const morgan = require('morgan')


const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(productRoutes);

module.exports = app;
