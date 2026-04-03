const mongoose=require("mongoose");
const image=require("../Schema/Image");

const ImageModel=mongoose.model("Image",image);
module.exports=ImageModel;