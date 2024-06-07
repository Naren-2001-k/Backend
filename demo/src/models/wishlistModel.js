const mongoose = require("mongoose");
const { v4: uuid4 } = require("uuid");
const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid4,
  },
  userId: {
    type: String,
  },
  productId: {
    type: String,
  },
  userStatus: {
    type: Boolean,
    default: false,
  },
});
const wishlistModel = mongoose.model("wishlist", productSchema);
module.exports = wishlistModel;
