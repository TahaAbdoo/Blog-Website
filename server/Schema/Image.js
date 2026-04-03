const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const image=new Schema({
    path:{
        type:String,
        ref:"Image"
    }
});

module.exports=image;