const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  item: {
    type: String,
    unique: true,
    required: [true, 'Todo produto deve ter nome'],
  },
  quantidade: {
    type: Number,
    required: [true, 'Todo produto deve ter uma quantidade'],
  },
  valor: { type: Number, required: [true, 'Todo produto deve ter um valor'] },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
