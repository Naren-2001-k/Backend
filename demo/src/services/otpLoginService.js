const otpModel=require('../models/otplogin')
const createOTPLogin=async(body)=>{
const OTPData=await otpModel.create(body)
return OTPData
}

module.exports={
    createOTPLogin
}