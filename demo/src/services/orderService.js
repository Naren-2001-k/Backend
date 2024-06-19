const ordermodel = require("../models/order");
const registerModel = require("../models/registerModel");
// const orderConroller = require("../controller/orderController")

const createOrderDetails = async (body) => {
  const createOrder = await ordermodel.create(body);
  return createOrder;
};

const getOrderDetails = async (id) => {
  const getOrder = await registerModel.aggregate([
    {
      $match: {
        _id: id,
      },
    },
    {
      $lookup: {
        from: "orders",
        localField: "_id",
        foreignField: "userId",
        as: "orderdata",
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "orderdata.productId",
        foreignField: "_id",
        as: "productdata",
      },
    },
    {
      $project: {
        name: 1,
        age: 1,
        mobile: 1,
        email: 1,
        orderdata: {
          _id: 1,
        },
        productdata: {
          _id: 1,
          productName: 1,
          price: 1,
          qty: 1,
          Img: 1,
        },
      },
    },
  ]);
  return getOrder;
};
module.exports = {
  createOrderDetails,
  getOrderDetails,
};
