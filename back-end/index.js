const express= require('express');
const app= express();
const bcrypt= require('bcrypt');
const connection = "./config/db.js";
(async()=>{
  try {
     await connection;
     console.log('connected to mongol');
  }
  catch (error) {
     console.log('error while connection to mongol '+(error));
  }
})();

app.post('/signup', async (req,res)=>{
    const{email , name ,password } = req.body;
     try {
        const user = await userModel.findOnd({email :email});

          if(!user){
                bcrypt.hash(password , 4 , async function(err, hash){
                  await userModel.create({name :name , password : hash , email :email});
                  res.send('signup succesfull');
                })
          }
          else{
            console.log('user already register');
          }
     }
     catch (error) {
      console.error(error);
      res.send('sign up failed');
     }

});

app.post('/login', async (req,res)=>{
     const {email, password} =req.body;
     email= email.trim().toLowerCase();
     const user =  await userModel.findOne({email :email});

   try {
       if(user){

                bcrypt.compare(password, user.password, (err,result)=>{
                   if(err){
                    throw err;
                   }
                  if(result){
                    const token = jwt.sign({userId : user._id}, 'secret');
                    console.log(result);
                      return res.json({ msg: 'Login successful', token});
                  } else {
                return res.status(400).json({ msg: 'Invalid credentials' });
                 }
           
                })
       }
       else{
        res.send('register first');
       }
      
   }
   catch (error) {
       console.log(error);
   }

})

app.listen(7000, ()=>{
    console.log('app running at port 7000')
})