const mongoose=require("mongoose")


async function connnect_to_database(){

   await  mongoose.connect('mongodb://127.0.0.1:27017/test')
   
   console.log(" hello sunny mongoose connect to the data base ")

}

module.exports={connnect_to_database}