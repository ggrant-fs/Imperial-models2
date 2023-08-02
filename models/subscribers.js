const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    
    firstName:{
        type: String,
        requied:[true,'Schema validation error, each subscription requires a first name, please check models/subscribers.js'],
        minLength:[1,"The minimum length of characters for the firstName field can't be less than one"],
        maxLength:[120,"The maximum length of characters for the firstName field can't exceed 120 characters"]
    },

    lastName:{
        type: String,
       required:[true,'Schema validation error, each subscription requires a last name, please check models/subscribers.js'],
       minLength:[1,"The minimum length of characters for the lastName field can't be less than one"],
       maxLength:[120,"The maximum length of characters for the lastName field can't exceed 120 characters"]
    },
    email:{
        type: String,
       required:[true,'Schema validation error, each subscription requires an email, please check models/subscribers.js'],
       //include a custom validator that checks if the given email is valid
     }
},{timestamp:true});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;