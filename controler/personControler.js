


const personPost=(req,res)=>{
   res.send("hello i send the i am the male url ")  
 
}

const personGet=(req,res)=>{
    res.send("Hello i am send the person getmethods  ")
}

module.exports={personPost,personGet}