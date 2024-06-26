const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const wishlistController = require("../controller/wishlistController");
router.route("/add/product").post(productController.createProductData);
router.route("/get/all/product").get(productController.getProductAll);
router.route("/wishlist").post(wishlistController.addWishlist);
// get all product using pagination
router.route("/get/all/product/:page").get(productController.getAllProduct);
// sorting
router.route("/sort").get(productController.sortData);
// update many
router.route("/update/product/all").put(productController.updateManyData);
// update many
router.route("/update/product/qty").put(productController.updateQtyData);
// delete field
router.route("/delete/field").delete(productController.deleteField);

module.exports = router;
