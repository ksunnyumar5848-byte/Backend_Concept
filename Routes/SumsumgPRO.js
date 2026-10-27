const express=require('express')
const routes=express.Router()
const {SumProduct}=require('../controler/product_contoler.js')

routes.get('/sumsumng_promax',SumProduct)


module.exports=routes