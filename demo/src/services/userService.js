const usermodel=require('../models/registerModel')
const createUserDetails=async(body)=>{
const createData=await usermodel.create(body)
return createData;
}
const getUsers=async()=>{
    const userDetails=await usermodel.find({});
    return userDetails;
}
module.exports={
    createUserDetails,
    getUsers
};