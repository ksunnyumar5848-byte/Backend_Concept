const mongoose=require("mongoose")

personSchema=mongoose.Schema({
    name:String,
    age:Number,
    height:Number,
    weight:Number,
    password:Number,
    email:String
}
)

let person=mongoose.model("person",personSchema)
