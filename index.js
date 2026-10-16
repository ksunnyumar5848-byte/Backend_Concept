const express=require("express") // import the express feature 

const app=express() // this is create the sever 
const PORT=5005

app.get('/',(req,res)=>{
    res.send("this are send the response hello sunny ")
})

app.listen(PORT,()=>{
    console.log(`server are the start the this port ${PORT} `)
})