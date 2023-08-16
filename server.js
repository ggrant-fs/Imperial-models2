const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const path = require("node:path");
const PORT  = process.env.PORT || 5000;
const db = process.env.DATABASE
// const app = require('./app');

const app = express();

if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname,`client/build`));
 
    app.get('*',(req,res)=>{
       res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
 }

// mongoose connect 
// mongoose.connect(db,{
//     useNewUrlParser:true, 
//     useCreateIndex:true, 
//     useFindAndModify:false 
// }).then(()=> console.log('Mongo DB connection was successful'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

