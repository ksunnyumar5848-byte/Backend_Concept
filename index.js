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



/*==============   Request object property ==========*
    1)  req.body
    2)  req.parms
    3)  req.queary 
*/

app.post('/person',(req,res)=>{
    console.log(req.body)
    res.send("send the information ")
})

app.get('/person/:id',(req,res)=>{
    console.log(req.params)
    res.send("this are send the parameter varibale ")
})

app.get('/person',(req,res)=>{
    console.log(req.query)
    res.send("this are send quary value ")
})