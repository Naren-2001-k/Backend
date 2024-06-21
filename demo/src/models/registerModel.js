const mongoose=require('mongoose');
const { v4: uuidv4 } = require('uuid');
const moment=require("moment")
const registerSchema=new mongoose.Schema({
    _id:{
        type:String,
        default:uuidv4
    },
    name:{
        type:String
    },
    age:{
        type:Number
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    mobile:{
        type:Number
    },
    active:{
        type:Boolean,
        default:true
    },
    date:{
        type:String,
        default:moment().toDate()
    }
})
const registerModel = mongoose.model("register",registerSchema);
module.exports = registerModel;