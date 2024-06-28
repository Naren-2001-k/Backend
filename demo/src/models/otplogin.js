const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
// const nodemailer=require('nodemailer')
const otpLoginSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  user_id:{
    type:String
  },
  email:{
    type:String
},
OTP:{
    type: String,
    default: ()=> {
        // Generate a random 6-digit OTP
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
}
});
const otpModel = mongoose.model("otpLogin",otpLoginSchema);
module.exports = otpModel;