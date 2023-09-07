// import mongoose 
const mongoose = require('mongoose')

// using mongoose definr schrms
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// create model
const users = mongoose.model("users",userSchema)

// export
module.exports = users