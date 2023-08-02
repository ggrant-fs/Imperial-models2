const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:[true,'Schema validation error, the Model Schema requires an image, please check models/models.js']
    },
    firstName:{
        type:String,
        required:[true,'Schema validation error, the Model Schema requires a first name, please check models/models.js']
    },
    lastName:{
        type:String,
        required:[true,'Schema validation error, the Model Schema requires a last name, please check models/models.js']
    },
    gender:{
        type:String,
        required:[true,'Schema validation error, the Model Schema requires a gender, please check models/models.js']
    },
    
 },{timestamps:true});

const Model = mongoose.model('Model',modelsSchema);

module.exports = Model;