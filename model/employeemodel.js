const mongoose=require("mongoose")

const employeeSchema=mongoose.Schema({
   "name":String,
   "company":String,
   "Skills":String,
   "exprencess":String,
   "profission":String,
   "password":Number,
   "email":String
})

let employeeinfo=mongoose.model("employee",employeeSchema)

module.exports=employeeinfo