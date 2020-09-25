const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  item: String,
  quantidade: Number,
  valor: Number  
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;