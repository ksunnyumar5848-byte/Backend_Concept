
// crud opreation of rest api 

const express = require("express");
const app = express();

const softwareRoutes=require('./Routes/tcs_employee.js')
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

app.use("/TCS_Emp",softwareRoutes)
app.listen(3001, () => {
    console.log("server created on port 3001");
});


 




