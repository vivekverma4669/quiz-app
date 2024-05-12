const mongoose= require('mongoose');
require('dotenv').config();

const URL= process.env.URL;
const connection = mongoose.connect(`${URL}/Quiz`);// connect to mongoldb and difine data base name 
module.exports= {connection};
