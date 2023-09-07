const users = require('../Models/userSchema')

// export logic of the client reques
exports.register = async (req,res)=>{
    console.log(req.body);
    const {username,phone,password}=req.body 
    if(!username || !phone || !password ){
        res.status(403).json("All inputs are required")
    }
   try {

    const preuser =  await users.findOne({phone})
    if(preuser){
        res.status(406).json("User Already Exits..")
    }
    else{
        // add user to db
        const newuser = new users({
            username,
            phone,
            password
        })
        // save in mongo db
        
        await newuser.save()
        res.status(200).json(newuser)
    }
   } catch (error) {
    res.status(401).json(error)
   }      
}  


// login
exports.login = async (req,res)=>{
    const {phone,password} = req.body
    // check phone number and password db
    try {
        const preuser = await users.findOne({phone,password})
        if(preuser){
            res.status(200).json(preuser)
        }
        else{
            res.status(404).json("Invalid Phone Number or Password")
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}

// delete account
exports.deleteacno = async (req,res)=>{
    const {phone} = req.params
    try{
        await users.deleteOne({phone})
        const allusers = await users.find()
        res.status(200).json(allusers)
    }
    catch (error) {
        res.status(401).json(error)
    }
}