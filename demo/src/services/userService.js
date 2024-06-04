const usermodel = require("../models/registerModel");
const createUserDetails = async (body) => {
  const createData = await usermodel.create(body);
  return createData;
};
const getUsers = async () => {
  const userDetails = await usermodel.find({});
  return userDetails;
};
const getSpecificUser = async (id) => {
  const userDetails = await usermodel.findById({ _id: id });
  return userDetails;
  // console.log(id);
};
// const userDetails = await usermodel.aggregate([
// {
//   $match: {
//     _id: id,
//   },
// },
// {
// $match: {
// $and: [{ _id: { $eq: id } }, { name: { $eq: "John Doe" } }],
// },
// },
// {
//   $match: {
//     $or: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
//   },
// },
// ]);
// return userDetails;
// };
const deleteUser = async (id) => {
  const deleteUserDetails = await usermodel.findById({ _id: id });
  if (!deleteUserDetails) {
    console.log("user not found");
  } else {
    const deletedata = await usermodel.findByIdAndDelete({ _id: id });
    console.log(deletedata);
  }
  return deleteUserDetails;
};

module.exports = {
  createUserDetails,
  getUsers,
  getSpecificUser,
  deleteUser,
};
