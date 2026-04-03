const BlogModel=require('../model/BlogModel');
const categoryModel = require('../model/CategoryModel');
require('../model/UserModel');
require('../model/ImageModel');

exports.addBlog=async(req,res)=>{
  try {
        const userId=req.body.userId;
        const now = new Date();
        const Address = req.body.Address;
        const Description = req.body.Description;
        const category = req.body.category;
        const image=req.file.path.replace(/\\/g, "/");

        let hours = now.getHours(); 
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const period = hours >= 12 ? 'م' : 'ص';
        hours = hours % 12;
        hours = hours ? hours : 12;
        const currentTime = `${hours}:${minutes} ${period}`;
        if(!Address || !Description){
            return res.json({
                msg : "أرجو ملء جميع الحقول",
                state : 0,
                data : [],
            })
        }
        const imageDoc = await ImagesModel.create({
      path: req.file.path.replace(/\\/g, "/")
    });
        await BlogModel.create({
            Address: Address,
            Description: Description,
            Time : currentTime,
            category:category,
            image:imageDoc._id,
            user:userId
        }).then((data) => {
            res.json({
                msg : "✔تمت إضافة المقال بنجاح ",
                state : 1,
                data : data
            })
        }).catch((err) => {
            console.log(err)
            res.json({
                msg : "Internal Server Error 500" ,
                state : 0,
                data : []
            })
        })
    } catch (error) {
        console.log(error)
        res.json({
            msg : "Internal Server Error"  + err,
            state : 0,
            data : []
        })
    }
    
}
exports.getBlogs=async(req,res)=>{
    try{
        const blogs = await BlogModel.find().populate("category").populate("user").populate("image");
            res.json({
                msg : "تم جلب المقالات بنجاح",
                state : 1,
                data : blogs
            })
    }
    catch(err){
        console.log(err);
        res.json({
            msg : "Internal Server Error 500" ,
            state : 0,
            data : []
        })
    }
}
exports.getBlog=async(req,res)=>{
    try{ 
        const id=req.params.id;
        const blog=await BlogModel.findById(id).populate("category").populate("user").populate("image");
        if(!blog){
            return res.json({
                msg : "المقال غير موجود",
                state : 0,
                data : []
            })
        }
        res.json({
            msg:"نتمنى لك قراءة ممتعة😉",
            state : 1,
            data : blog
        })
    }

catch(err){
    console.log(err);
    res.json({ 
        msg : "Internal Server Error 500" ,
        state : 0,
        data : []
     });
    }

}

