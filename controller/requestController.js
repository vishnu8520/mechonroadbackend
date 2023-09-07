
// import model 
const requests = require('../Models/requestSchema')

// expot logic to resolve http client request
exports.adddata = async (req,res)=>{
    console.log(req.body);
    const { username,phone,email,address,bike } = req.body
    if(!username || !phone || !email || !address || !bike){
        res.status(403).json("All Inputs are Required")
    }
    try {
        const predata = await requests.findOne({phone})
        if(predata){
            res.status(403).json("One Complaint Already Registered")
        }
        else{
            // add data to mongo db
            const newdata = new requests({
                username,
                phone,
                email,
                address,
                bike
            })
            // to save in mongodb
            await newdata.save()
            res.status(200).json(newdata)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

// get all datas
exports.getdata = async (req, res) => {
    try {
        const alldatas= await requests.find()
        res.status(200).json(alldatas)
    }
    catch (error) {
        res.status(401).json(error)
    }
}

// remove item from alldata
exports.removedata = async (req,res)=>{
    const {phone} = req.params
    try{
        await requests.deleteOne({phone})
        const alldatas= await requests.find()
        res.status(200).json(alldatas)
    }
    catch (error) {
        res.status(401).json(error)
    }
}
