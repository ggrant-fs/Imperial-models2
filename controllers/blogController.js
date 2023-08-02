const BlogPost = require('./../models/blogPost');

exports.getAllBlogPost = (req,res)=>{
    res.status(500).json({
        status:'Error',
        message:'no data available'
    });
}

exports.getBlogPost = (req,res)=>{
    res.status(500).json({
        status:'Error',
        message:'no data available'
    });
}
