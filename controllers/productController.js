const Product = require('../model/Product');

exports.postNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: 'success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error: ${error.message}`,
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error: ${error.message}`,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.deleteOne(req.body);
    res.send('Deleted');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error: ${error.message}`,
    });
  }
};

exports.wipeDB = async (req, res) => {
  try {
    const product = await Product.deleteMany({});
    res.status(204).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error: ${error.message}`,
    });
  }
};
