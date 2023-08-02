const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:"./config.env"});
const PORT  = process.env.PORT || 5000;
const db = process.env.DATABASE
const app = require('./app');


// mongoose connect 
mongoose.connect(db,{
    useNewUrlParser:true, 
    useCreateIndex:true, 
    useFindAndModify:false 
}).then(()=> console.log('Mongo DB connection was successful'))

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

