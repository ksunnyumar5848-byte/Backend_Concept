const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    marks:Number,
    salary:Number,
    Profission:String
})

let userinfo=mongoose.model("user",userSchema)

module.exports=userinfo