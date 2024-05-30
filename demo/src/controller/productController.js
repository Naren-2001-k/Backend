const productService = require("../services/productService");
const createProductData = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.send(product);
};
module.exports = {
  createProductData,
};