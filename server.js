
// crud opreation of rest api 

const express = require("express");
const app = express();

const softwareRoutes=require('./Routes/tcs_employee.js')

const {connnect_to_database}=require('./config/db.js')

const user=require('./model/userModel.js')

const employeeinfo=require('./model/employeemodel.js')
const person=require('./model/person_model.js')
const PersonRouterPage=require('./Routes/personRouter.js')

const Blog=require('./model/Blog.js')

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




// employee create in the database 

  console.log(employeeinfo.name)


app.post("/emp_Create",async (req,res)=>{

      const userformdata= req.body
      
    console.log(userformdata)

     await employeeinfo.create({
        name:userformdata.name,
        skills:userformdata.skills,
        profission:userformdata.profission,
        company:userformdata.company,
        exprencess:userformdata.exprencess,
        password:userformdata.password,
        email:userformdata.email
     })

    res.send("emp create the successfully bro ... !  ")

})



app.get("/All-emp",async (req,res)=>{

   const allperson= await employeeinfo.find()

   console.log(allperson)

   res.send(allperson)

})



// create the post methods  person  kai liye becasuse post methods forntend se data ko layega or 
// yani form se data aayega fir data aanai kai baad  mongoose mai hepl se data base create kar dainge 



app.use('/person',PersonRouterPage)












app.post('/createBlog',async (req,res)=>{
      const formdata=req.body
    console.log(formdata)
    const CreateBlogbro=await Blog.create(formdata)
     res.send(CreateBlogbro)
})


app.get('/allBlog',async (req,res)=>{

    const all_Blog= await Blog.find()

    res.send(all_Blog)
})



function myMiddleware(req,res,next){
      
    
  console.log("Acha mere ko id or payment id mil gaya hai ")

   next()


}

function AgeMiddleWare(req,res,next){
    
    console.log("ye mere age Valideter hai ye age ko check karega fir response dega ")

    next()
}

app.post('/Libary',myMiddleware,AgeMiddleWare, (req,res)=>{

    const formdata=req.body

    res.json({
        "message":"you are the this libary student "
    })

})




















console.log("  mast mode hai sunny good backend knowladge  🫡🫡🫡🫠")

app.listen(3001, () => {
    console.log("server are start the this post number ");
});








 




