const usermodel=require('../models/registerModel')
const createUserDetails=async(body)=>{
const createData=await usermodel.create(body)
return createData;
}
const getUsers=async()=>{
    const userDetails=await usermodel.find({});
    return userDetails;
}
const getSpecificUser = async (id) => {
    const userDetails = await usermodel.findById({ _id: id });
    return userDetails;
    // console.log(id);
  };
module.exports={
    createUserDetails,
    getUsers,
    getSpecificUser
};