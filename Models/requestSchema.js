// import mongoose
const mongoose=require('mongoose')

// define schmea
const requestSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    bike:{
        type:String,
        required:true
    }
})
// create model 
const requests = mongoose.model("requests",requestSchema)
// export model
module.exports = requests


