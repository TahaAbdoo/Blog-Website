const UserModel=require('../model/UserModel');





exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.json({
      msg: "البريد الإلكتروني أو كلمة المرور خاطئة !",
      state: 0,
      data: [],
    });
  }

  const user = await UserModel.findOne({
    $and:[{email: email},
        {password:password}
    ]
  });

  if (!user) {
    return res.json({
      msg: "إسم المستخدم أو كلمة المرور خاطئة !",
      state: 0,
      data: [],
    });
  }



    
     return res.json({
        msg : "تمت المصادقة بنجاح",
        state : 1,
        data: user
    })
  }
    
       /*els((err)=>{
            console.log(err);
            return res.json({
                msg:"error  in mongodb",
                state:0,
                data:[],
            })
        }) */

            




exports.create=async(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;
    const email=req.body.email;
    const phone=req.body.phone;
    if(!username || !password || !email || !phone)
                {
                    return res.json({
                        msg:"من فضلك قم بإدخال البيانات",
                        state:0,
                        data:[],
                    })
                }
            
    const user=  await UserModel.findOne({
            $or:[
                 {username: username},
                 {email:email}
            ]
})
            if(user){
                return res.json({
                    msg:"هذا الحساب مسجل مسبقا !",
                    state:0,
                    data:[]
                })
            }
            
            else{
        await UserModel.create(
                {
                    username: username,
                    password:password,
                    email:email,
                    phone:phone
                }
            ).then((data)=>{
                return res.json({
                    msg:"تم إنشاء حسابك بنجاح 😀",
                    state:1,
                    data:data
                })
            }).catch((err)=>{
                    console.log(err);
                    return res.json({
                        msg:"خطأ في قاعدة البيانات ",
                        state:0,
                        data:[],
                    })
                })

            
                    }

            
}