const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const usermodel = require("../models/registerModel");
// create data
router.route("/register").post(userController.createUserDetails);
// get all user
router.route("/get/all/user").get(userController.getUserAll);
// get by id
router.route("/get/user/:id").get(userController.getSpecificUser);
// delete by Id
router.route("/delete/:id").delete(userController.deleteUser);
// login
router.route("/login").get(userController.login);
// Active User
router.route("/active").get(userController.activeUser);
// Update User
router.route("/update/user/:id").put(userController.updateUser);
// Wishlist Data and bind the table
router.route("/get/wishlist/product/:id").get(userController.userWishlist);
// delete empty data
router.delete("/delete-empty-users", async (req, res) => {
  try {
    const result = await usermodel.deleteMany({
      name: { $exists: true, $eq: "" },
    });
    res.json({
      message: `${result.deletedCount} empty users deleted successfully.`,
    });
  } catch (err) {
    console.error("Error deleting empty users:", err);
    res.status(500).json({ error: "Failed to delete empty users." });
  }
});
module.exports = router;
