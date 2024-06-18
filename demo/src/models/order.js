const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const orderSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  deliveryStatus: {
    type: String,
    default: "Pending",
  },
  active: {
    type: Boolean,
    default: true,
  },
});
const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;
