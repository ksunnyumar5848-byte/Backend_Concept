const person=require('../model/person_model')



const personPost= async (req,res)=>{

   const formdata=req.body

 const personCreate= await person.create({
    name:formdata.name,
    age:formdata.age,
    height:formdata.height,
    weight:formdata.weight,
    password:formdata.password,
    email:formdata.email
   }
)

   res.send(personCreate)  
 
}

const personGet= async (req,res)=>{
        
    const allMalepeson= await  person.find()

    res.send(allMalepeson)

}

module.exports={personPost,personGet}