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
const sortData = async (req, res) => {
  const sort = await productService.sortData(req.body);
  res.send(sort);
};
const groupingData = async (req, res) => {
  const grouping = await productService.groupingData();
  res.send(grouping);
};
const updateManyData = async (req, res) => {
  // const { price, minimumQty } = req.body;
  const result = await productService.updateManyData();
  res.send(result);
};
const updateQtyData = async (req, res) => {
  const { update } = req.body;
  const result = await productService.updateQtyData(update);
  res.send(result);
};
const deleteField = async (req, res) => {
  const deleted = await productService.deleteField();
  res.send(deleted);
};
module.exports = {
  createProductData,
  getProductAll,
  getAllProduct,
  sortData,
  groupingData,
  updateManyData,
  updateQtyData,
  deleteField,
};
