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
const updateManyData = async () => {
  const result = await productModel.updateMany(
    { price: { $lt: 10 } }, // Condition: price less than 20 rupees
    { $set: { minimumqty: 15 } } // Update: set minimumqty to 10
  );
  return result;
};
const updateQtyData = async (update) => {
  const result = await productModel.updateMany({ $set: update });
  return result;
};
const deleteField = async () => {
  const deleted = await productModel.updateMany({ $unset: { minimumQty: "" } });
  return deleted;
};
module.exports = {
  createProduct,
  getProduct,
  getAllProduct,
  sortData,
  groupingData,
  updateManyData,
  updateQtyData,
  deleteField,
};
