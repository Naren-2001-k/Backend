const productModel = require("../models/productModel");

const createProduct = async (body) => {
  const product = await productModel.create(body);
  return product;
};
const getProduct=async()=>{
  const productDetails=await productModel.find({});
  return productDetails;
}
// const getSpecificUser = async (id) => {
//   const userDetails = await usermodel.findById({ _id: id });
//   return userDetails;
//   console.log(id);
//   };

module.exports = {
  createProduct,
  getProduct,
};