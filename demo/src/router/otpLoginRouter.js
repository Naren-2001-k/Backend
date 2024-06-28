const express = require("express");
const router = express.Router();
const otpLoginController = require("../controller/otpLoginController");
// create data
router.route("/otpLogin").post(otpLoginController.createOTPLogin);