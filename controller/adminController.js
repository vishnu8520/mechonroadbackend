const admins = require('../Models/adminSchema')

exports.register = async (req,res) =>{
    // logic to register
    console.log(req.body);
    const {adminpswd}=req.body 
    if(!adminpswd){
        res.status(403).json("Admin Password required")
    }
   try {
    const preadmin =  await admins.findOne({adminpswd})
    if(preadmin){
        res.status(406).json("Admin Already Exits..")
    }
    else{
        // add user to db
        const newadmin = new admins({
            adminpswd
        })
        // save in mongo db
        
        await newadmin.save()
        res.status(200).json(newadmin)
    }
   } catch (error) {
    res.status(401).json(error)
   }  
}

// login
exports.adminlogin = async (req,res)=>{
    const {adminpswd} = req.body
    // check phone number and password db
    try {
        const preadmin = await admins.findOne({adminpswd})
        if(preadmin){
            res.status(200).json(preadmin)
        }
        else{
            res.status(404).json("Invalid Password")
        }
        
    } catch (error) {
        res.status(401).json(error)
    }
}