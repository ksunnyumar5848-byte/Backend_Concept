
// crud opreation of rest api 

const express = require("express");
const app = express();

const softwareRoutes=require('./Routes/tcs_employee.js')

const {connnect_to_database}=require('./config/db.js')

const user=require('./model/userModel.js')


/* 

const userRoutes=require('./Routes/best_user.js')
const productRoutes=require('./Routes/SumsumgPRO.js')
app.get('/', (req, res) => {
    res.send("get methods send the response");
});

// CRUD operations of REST API
app.get('/user', (req, res) => {
    res.send("this method is GET, sending the response");
});

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send("this method is POST, creating data");
});

app.patch('/user', (req, res) => {
    res.send("this method is PATCH, updating content");
});

app.delete('/user', (req, res) => {
    res.send("this method is DELETE, removing content");
});

 // flow the mvc architechture 

app.use("/user_best",userRoutes)
app.use("/Laptop_product",productRoutes)



*/

connnect_to_database()

app.use(express.urlencoded())

app.post('/createuser',async (req,res)=>{

    const formdata= req.body

    userdata=await user.create({
        name:formdata.name,
        marks:formdata.marks,
        age:formdata.age,
        profission:formdata.profission,
        salary:formdata.salary
    })
    res.send(userdata)
     
})

app.use("/TCS_Emp",softwareRoutes)
app.listen(3001, () => {
    console.log("server are start the this post number ");
});








 




