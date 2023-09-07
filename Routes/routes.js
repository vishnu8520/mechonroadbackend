const express = require('express')

// defining router
const router = new express.Router()

// import controller
const userController = require('../controller/userController')
const requestController = require('../controller/requestController')
const adminController = require('../controller/adminController')

// route to resolve http request
// add data
router.post('/user/add',requestController.adddata)

// register
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)

// admin register
router.post('/admin/register',adminController.register)

// admin login
router.post('/admin/login',adminController.adminlogin)

// get all requests
router.get('/admin/getalldata',requestController.getdata)

// remove an data from all datas
router.delete('/admin/deletedata/:phone',requestController.removedata)

// remove acno
router.delete('/user/deleteacno/:phone', userController.deleteacno)

 
// export router
module.exports = router