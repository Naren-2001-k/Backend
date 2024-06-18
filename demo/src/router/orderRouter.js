const express = require("express");
const router = express.Router();
const orderController = require("../controller/orderController");

router.route("/addOrder").post(orderController.createOrderDetails);
router.route("/getOrder/:id").get(orderController.getOrderDetails);

module.exports = router;
