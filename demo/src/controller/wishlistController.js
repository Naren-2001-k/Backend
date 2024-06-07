const wishlistService = require("../services/wishlistService");
const addWishlist = async (req, res) => {
  const wishlistData = await wishlistService.wishlistData(req.body);
  res.send(wishlistData);
};
module.exports = {
  addWishlist,
};
