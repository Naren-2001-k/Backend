const productModel = require("../models/productModel");

const createProduct = async (body) => {
  const product = await productModel.create(body);
  return product;
};
const getProduct = async () => {
  const productDetails = await productModel.find({});
  return productDetails;
};
// const getSpecificUser = async (id) => {
//   const userDetails = await usermodel.findById({ _id: id });
//   return userDetails;
//   console.log(id);
//   };
const getAllProduct = async (page) => {
  const allProduct = await productModel.aggregate([
    {
      $skip: page * 10,
    },
    {
      $limit: 10,
    },
  ]);
  return allProduct;
};

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
};
