const wishlistModel = require("../models/wishlistModel");
const  wishlistData = async (data) => {
  const wishlist = await wishlistModel.create(data);
  return wishlist;
};
module.exports = {
  wishlistData,
};
