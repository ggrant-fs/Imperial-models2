const express = require('express');
const blogController = require('./../controllers/blogController');
const router = express.Router();

router
.route('/')
.get(blogController.getAllBlogPost)
.get(blogController.getBlogPost);


module.exports = router;