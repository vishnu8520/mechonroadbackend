// mongoose

const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB Atlas Connected Successfully");
}).catch((error)=>{
    console.log("MongoDB Connection Error" + error);
})