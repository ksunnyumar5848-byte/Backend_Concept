const express=require("express")
const routes=express.Router()
const {getmethods,userpost}=require('../controler/userContoler.js')
routes.get('/user_1',getmethods)

routes.post('/user_1',userpost)


module.exports=routes

