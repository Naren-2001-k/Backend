const usermodel=require('../models/registerModel')
const createUserDetails=async(body)=>{
const createData=await usermodel.create(body)
return createData;
}

module.exports={
    createUserDetails
};