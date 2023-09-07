const mongoose = require('mongoose')

// schema
const adminSchema = new mongoose.Schema({
    adminpswd:{
        type:String,
        required:true,
        unique:true
    }
})

// create model
const admins = mongoose.model("admins",adminSchema)

// export
module.exports = admins