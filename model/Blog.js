

const mongoose=require("mongoose")

// create the blog shema and model


const blogSchema=mongoose.Schema({
    content:String,
    title:String,
    PERSON:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'person'
    }
})



let Blog=mongoose.model("Blog",blogSchema)


module.exports=Blog

