const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
// create data
router.route("/register").post(userController.createUserDetails);
// get all user
router.route("/get/all/user").get(userController.getUserAll);
// get by id
router.route('/get/user/:id').get(userController.getSpecificUser);
module.exports = router;

