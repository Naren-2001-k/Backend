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
    // const userDetails = await usermodel.findById({ _id: id });
    // return userDetails;
    // console.log(id);
//   };
  const userDetails = await usermodel.aggregate([
    // {
    //   $match: {
    //     _id: id,
    //   },
    // },
    {
      $match: {
        $and: [{ _id: { $eq: id } }, { name: { $eq: "John Doe" } }],
      },
    },
    // {
    //   $match: {
    //     $or: [{ _id: { $eq: id } }, { name: { $eq: "Alice" } }],
    //   },
    // },
   ]);
   return userDetails;
};
 
module.exports={
    createUserDetails,
    getUsers,
    getSpecificUser
};