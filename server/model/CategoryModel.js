const mongoose=require('mongoose');

const Categoryschema = require('../Schema/categorySchema');

//const CategoryModel=mongoose.model('Categories',Categoryschema);


module.exports = mongoose.model("Category", Categoryschema);