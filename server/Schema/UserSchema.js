const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const UserSchema =new mongoose.Schema({
    username:{
        type:String,
    },
    password:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    state:{
        type:Boolean,
    },
    lastlogin:{
        type:Date,
    }
    ,
    createdat:{
        type:Date,
    }
})
module.exports=UserSchema;