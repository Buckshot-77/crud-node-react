const express = require('express');
const productRoutes = require('./routes/productRoutes');
const morgan = require('morgan');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(productRoutes);

module.exports = app;
