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
const sortData = async (body) => {
  const sort = await productModel.aggregate([
    { $match: { price: { $gt: 5 } } }, // roducts where price > 5
    { $sort: { price: 1 } },
  ]);
  return sort;
};
const groupingData = async () => {
  const grouping = await productModel.aggregate([
    {
      $match: { price: { $gt: 5 } },
    },
    {
      $group: {
        _id: "$productName",
      },
    },
  ]);
  return grouping;
};

module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  sortData,
  groupingData,
};
