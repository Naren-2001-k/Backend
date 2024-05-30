const userService=require('../services/userService')
const createUserDetails=async(req,res)=>{
    const userData= await userService.createUserDetails(req.body)
    res.send(userData)
}
const getUserAll = async (req, res) => {
    const user = await userService.getUsers();
    res.send(user);
  };
  const getSpecificUser = async (req, res) => {
    const getUserDetails = await userService.getSpecificUser(req.params.id);
    res.send(getUserDetails);
  };
module.exports={
createUserDetails,
getUserAll,
getSpecificUser
}