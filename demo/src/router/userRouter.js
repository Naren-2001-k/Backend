const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// create data
router.route("/register").post(userController.createUserDetails);
// get all user
router.route("/get/all/user").get(userController.getUserAll);



module.exports = router;
