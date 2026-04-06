const CategoryModel=require("../model/CategoryModel")
exports.addCategory = async (req, res) => {
    try {
        const  name  = req.body.name;

        if (!name) {
            return res.json({ msg: "أدخل اسم التصنيف", state: 0 });
        }

        const newCategory = await CategoryModel.create({ name });

        res.json({
            msg: "تم إضافة التصنيف ✅",
            state: 1,
            data: newCategory
        });

    } catch (err) {
        res.json({ msg: "خطأ ❌", state: 0 });
    }
};
exports.getCategories=async (req, res) => {
        const userId=req.query.userId;
    try {



        const Categories = await CategoryModel.find({user:userId});

        res.json({
            msg: "تم ايجاد التصنيفات✅",
            state: 1,
            data:Categories
        });

    } catch (err) {
        res.json({ msg: "خطأ ❌", state: 0 });
    }
};