const productService = require("../services/productService");
const createProductData = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.send(product);
};
const getProductAll = async (req, res) => {
  const product = await productService.getProduct();
  res.send(product);
};

const getAllProduct = async (req, res) => {
  const allProduct = await productService.getAllProduct(req.params.page);
  res.send(allProduct);
};
module.exports = {
  createProductData,
  getProductAll,
  getAllProduct,
};
