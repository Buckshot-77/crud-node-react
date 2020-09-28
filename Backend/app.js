const express = require('express');
const productRoutes = require('./routes/productRoutes');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(cors());
app.use(express.json());
app.use(productRoutes);

module.exports = app;
