const userService = require("../services/userService");
const usermodel = require("../models/registerModel");
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
    res.status(200).send({ message: "Authentication Successfull", user });
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
module.exports = {
  createUserDetails,
  getUserAll,
  getSpecificUser,
  deleteUser,
  login,
  activeUser,
};
