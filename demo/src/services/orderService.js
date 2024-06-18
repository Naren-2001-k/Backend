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
      $project: {
        _id: 0,
        name: 1,
        id: 1,
        email: 1,
        orderdata: 1,
      },
    },
  ]);
  return getOrder;
};
module.exports = {
  createOrderDetails,
  getOrderDetails,
};
