const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const BlogSchema =new mongoose.Schema({
    Address:{
        type:String
    },
    Description:{
        type:String
    },
    Time:{
        type:String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    image:{
        type:String,
        ref:"Image"
        
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    }
})

module.exports=BlogSchema;