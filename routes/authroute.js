const express = require("express")
const registercontroller=require("../controllers/authcontroller")


const router= express.Router()


router.post('/register',registercontroller)

module.exports=router