const orderService = require("../services/orderService");

const createOrderDetails = async (req, res) => {
  const orderDetails = await orderService.createOrderDetails(req.body);
  res.send(orderDetails);
};

const getOrderDetails = async (req, res) => {
  const orderDetails = await orderService.getOrderDetails(req.params.id);
  res.send(orderDetails);
};

module.exports = {
  createOrderDetails,
  getOrderDetails,
};
