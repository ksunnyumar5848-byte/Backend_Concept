const express=require("express") // import the express feature 

const app=express() // this is create the sever 
const PORT=5005


app.use(express.json())

app.get('/',(req,res)=>{
    res.send("this are send the response hello sunny ")
})

app.listen(PORT,()=>{
    console.log(`server are the start the this port ${PORT} `)
})


/*

 ===============    CRUD  OPREATION OF REST API  ============== 
*/

app.get('/user',(req,res)=>{
    res.send("this methods the read the content ")
})
app.post('/user',(req,res)=>{
    res.send("this methods are the create the content ")
    res.send("this information are comes from the frontend ")
})
app.delete('/user',(req,res)=>{
    res.send("this methods are the delete the content for this end ponit ")
})
app.patch('/user',(req,res)=>{
    res.send("this methods are the delete the conent for this url ")
})



