const userService = require("../services/userService");
const usermodel = require("../models/registerModel");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const createUserDetails = async (req, res) => {
  const userData = await userService.createUserDetails(req.body);
  res.send(userData);
};
const getUserAll = async (req, res) => {
  const user = await userService.getUsers();
  res.send(user);
};
const getSpecificUser = async (req, res) => {
  const getUserDetails = await userService.getSpecificUser(req.params.id);
  res.send(getUserDetails);
};
const deleteUser = async (req, res) => {
  const deleteDetails = await userService.deleteUser(req.params.id);
  res.send(deleteDetails);
};
// login authentication
const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // try {
  const user = await usermodel.findOne({ email, password });
  //   console.log(user);
  if (user) {
    const payload = {
      email: user.email,
      password: user.password,
    };
    const secretKey = crypto.randomBytes(32).toString("hex");
    const jwt_Token = jwt.sign(payload, secretKey, { expiresIn: "24hrs" });
    res.status(200).send({
      token: jwt_Token,
      message: "Authentication Successfull",
    });
  } else {
    res.status(401).send({ message: "Authentication failed" });
  }
  // } catch (error) {
  //   res.status(500).send({ message: "Server error", error });
  // }
};
const activeUser = async (req, res) => {
  console.log(req.body, "contoller data");
  const User = await userService.inactiveUser(req.body);
  res.send(User);
};

const updateUser = async (req, res) => {
  const updateData = await userService.userData(req.params.id, req.body);
  res.send(updateData);
};

// Wishlist
const userWishlist = async (req, res) => {
  const getWishlist = await userService.wishlistData(req.params.id);
  res.send(getWishlist);
};

const createUser = async (body) => {
  const createDate = new Date();
  const userData = {
    date: createDate,
  };
  const user = await usermodel.create({ ...userData, ...body });
  return user;
};

const sortData = async (req, res) => {
  const sort = await userService.sortData();
  res.send(sort);
};

const getAllUser = async (req, res) => {
  const allUser = await userService.getAllUser(req.params.page);
  res.send(allUser);
};
module.exports = {
  createUserDetails,
  getUserAll,
  getSpecificUser,
  deleteUser,
  login,
  activeUser,
  updateUser,
  userWishlist,
  createUser,
  sortData,
  getAllUser,
};
