const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
router.route("/add/product").post(productController.createProductData);

module.exports = router;