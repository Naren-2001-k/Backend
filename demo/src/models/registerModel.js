const mongoose=require('mongoose');
const { v4: uuidv4 } = require('uuid');
const moment=require("moment")
const bcrypt=require('bcrypt')
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
        type:String,
        required:true
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
registerSchema.pre("save",async function(next){
    try {
        // Only hash the password if it's modified or new
        if (!this.isModified('password')) {
            return next();
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);

        // Hash the password using the salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Replace plaintext password with hashed password
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
})

const registerModel = mongoose.model("register",registerSchema);
module.exports = registerModel;