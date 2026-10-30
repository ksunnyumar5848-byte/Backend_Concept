const express=require("express")
const {personGet,personPost}=require('../controler/personControler')

const route=express.Router()

route.post('/male',personPost)
route.get('/male',personGet)

module.exports=route
