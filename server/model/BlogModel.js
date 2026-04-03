const mongoose = require('mongoose');
const BlogSchema=require('../Schema/BlogSchema');
const BlogModel=mongoose.model('Blog',BlogSchema);
module.exports=BlogModel;