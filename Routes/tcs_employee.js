

const {EngginearGET}=require('../controler/emp_software.js')

const express=require("express")

const route=express.Router();

route.get('/software_engginear',EngginearGET)


module.exports=route


