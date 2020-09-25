const Product = require('../model/Product');

exports.postNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    console.log(product);

    res.send('Done');
  } catch (error) {
    res.send(`Error! 🧨: ${error.message}`);
  }
};

exports.getProducts = async (req, res) => {
  res.json({
    message: 'Hello from the server!',
  });
}

exports.deleteProduct = async (req, res) => {
  await Product.deleteMany({});
  res.send('Deleted');
}