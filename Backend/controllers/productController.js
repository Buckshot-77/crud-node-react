const Product = require('../model/Product');
const {sendPositiveResponse, sendError} = require('./utils');

exports.postNewProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    sendPositiveResponse(201, res, product);
  } catch (error) {
    sendError(400, res, error);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    sendPositiveResponse(200, res, products);
  } catch (error) {
    sendError(400, res, error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    sendPositiveResponse(204, res);
  } catch (error) {
    sendError(404, res, error);
  }
};

exports.wipeDB = async (req, res) => {
  try {
    await Product.deleteMany({});
    sendPositiveResponse(204, res);
  } catch (error) {
    sendError(400, res, error);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    sendPositiveResponse(200, res, product);
  } catch (error) {
    sendError(404, res, error);
  }
};

exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    sendPositiveResponse(200, res, product);
  } catch (error) {
    sendError(404, res, error);
  }
};
