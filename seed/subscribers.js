const db = require('./db');
const Subscriber = require('./../models/subscribers');

// const mongoose = require('mongoose');
const newSubscriber= require('./seedConstructor');


const subscriberList = [
    {
        "firstName":newSubscriber.person1[0],
        "lastName":newSubscriber.person1[1],
        "email":newSubscriber.person1[2]
    },
    {
        "firstName":newSubscriber.person2[0],
        "lastName":newSubscriber.person2[1],
        "email":newSubscriber.person2[2]
    },
    {
        "firstName":newSubscriber.person3[0],
        "lastName":newSubscriber.person3[1],
        "email":newSubscriber.person3[2]
    },
    {
        "firstName":newSubscriber.person4[0],
        "lastName":newSubscriber.person4[1],
        "email":newSubscriber.person4[2]
    },
    {
        "firstName":newSubscriber.person5[0],
        "lastName":newSubscriber.person5[1],
        "email":newSubscriber.person5[2]
    },
    
];


const seedDB = async () =>{
    await Subscriber.insertMany(subscriberList);
    console.log('Database has been seeded !');
}


seedDB().then(()=>{
    mongoose.connection.close();
    console.log('DB conection has been closed');
});



