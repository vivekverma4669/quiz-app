const jwt= require('jsonwebtoken');

 const auth= (req,res,next)=>{
  const token = req.headers.authorization?.split(" ")[1];
  jwt.verify(token,'secret',(err,decode)=>{
    
  })
 }
module.exports= {auth}