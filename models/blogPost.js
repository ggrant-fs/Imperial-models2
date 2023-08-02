const mongoose = require('mongoose');

const blogPostSchema  = new mongoose.Schema({
     image:{
        type:String,
        unique:true,
        required:[true,'Schema validation error, the blogpost requires a image, please check models/blogPost.js']
     },

      catagory:{
         type:String,
         unique:true,
         required:[true,'Schema validation error, the blogpost requires a catagory, please check models/blogPost.js']
      },

      caption:{
        type:String,
        unique:true,
        required:[true,'Schema validation error, the blogpost requires a caption, please check models/blogPost.js']
      },

      author:{
        type:String,
        required:[true,'Schema validation error, the blogpost requires a author, please check models/blogPost.js']
      },
     
},{timestamp:true});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;