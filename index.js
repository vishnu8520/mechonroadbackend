// import
// dotenv
require('dotenv').config();
// express
const express = require('express')
// cors
const cors = require('cors')

// db imort
require('./db/connection')

// router import
const router = require('./Routes/routes')

// create express server
const server = express()

// port
const PORT = 3000 || process.env.PORT

// use cors json parser in server app
server.use(cors())
server.use(express.json())
// use router
server.use(router)

// run the server
server.listen(PORT,()=>{
    console.log(`Project server started at port number ${PORT}`);
})