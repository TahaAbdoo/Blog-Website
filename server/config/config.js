const mongoose=require('mongoose');

const db= mongoose.connect('mongodb://localhost:27017/newBlogapp')
.then(()=>{
    console.log('Connected to MongoDB 😎');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB',err);
})
module.exports=db;