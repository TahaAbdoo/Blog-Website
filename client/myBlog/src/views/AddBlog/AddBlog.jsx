import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Input, Button } from '@heroui/react';
import 'react-toastify/dist/ReactToastify.css'; // 🔥 مهم جدًا
const NewBlog = () => {
    const notify = (msg) => toast(msg);
    const [categories, setCategories] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState(""); const [blogTitle, setBlogTitle] = React.useState("");
    const [blogContent, setBlogContent] = React.useState("");
    const [image, setImage] = React.useState(null);
    const [preview, setPreview] = React.useState(null);
    const user = localStorage.getItem("userId");
    const addBlog = async () => {
        const form = new FormData();
        form.append("picture", image);
        form.append("Address", blogTitle);
        form.append("Description", blogContent);
        form.append("category", selectedCategory);
        form.append("userId", user);
        
        try {
            const res = await axios.post("http://localhost:5500/addBlog",form)
            console.log(res.data);
            notify(res.data.msg);
            setBlogTitle("");
            setBlogContent("");
            setSelectedCategory("")

        } catch (err) {



            toast.error("حدث خطأ أثناء الإرسال ❌");
        }
    }

    const getCategories = async () => {
        try {
            const res = await axios.get("http://localhost:5500/getCategories");
            console.log(res.data);

            setCategories(res.data.data); //
        }
        catch (err) {
            console.log("erorr")
        }



    }
    const SendImage = async () => {
        
        const form = new FormData();
        form.append("picture", image);
        //form.append("name", "Taha");
        console.log(image);
       const imgRes = await axios.post("http://localhost:5500/upload", form).then(async res => {
            console.log(res.data);
        await getallimages();
             // 🔥 تحديث الصور مباشرة
        }).catch(err => {
            console.log(err);
        })
    }

    React.useEffect(() => {
        getCategories();
    }, []);
const [data,setData]=React.useState([]);

    const getallimages =async()=>{
        await axios.get("http://localhost:5500/getallimages").then(res => {
            setData(res.data.data);

        }).catch(err => {
            console.log(err);
        });



    };
    React.useEffect(()=>{
            getallimages();
        },[]);

    return (
        <>
            <ToastContainer dir="rtl" position="top-right" autoClose={3000} />

            <div>
                <div className='bg-blue-100 shadow-2xl flex flex-col px-10 py-20 bord-dashed rounded-4xl relative '>
                    <h1 dir='rtl' className="text-4xl font-bold text-slate-800 mb-10">
                        أضف مدونتك الأن 😉
                    </h1>

                    <input
                        onChange={(e) => setBlogTitle(e.target.value)}
                        dir='rtl'
                        type="text"
                        className="bg-slate-900 p-2 text-white"
                        placeholder="ادخل عنوان المقال"
                        value={blogTitle}
                    />

                    <textarea
                        onChange={(e) => setBlogContent(e.target.value)}
                        dir='rtl'
                        className="bg-slate-900 p-2 text-white mt-5"
                        placeholder="اكتب مقالتك ..."
                        value={blogContent}
                    ></textarea>
                    <label className="my-3" dir='rtl' htmlFor="">إختر التصنيف </label>
                    <select value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)} dir="rtl" className="bg-slate-700 p-2 text-white">
                        <option value="">-- اختر تصنيف --</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}

                    </select>
                         <label className="my-3" dir='rtl' htmlFor="">إختر صورة </label>

                    <div className="flex justify-end mt-2 gap-3">

                         <Button variant="danger" onClick={SendImage}>أرسل</Button>
                        <Input aria-label="Name" className="w-48 " placeholder="أختر اسم للصورة" type="file"
                            onChange={e => {
                                    const file = e.target.files[0];

                                setImage(file);
                                if (file) {
                                    setPreview(URL.createObjectURL(file)); // 🔥
                                }
                            }
                            } />
                   
                    </div>
                    
                    <div className="flex justify-end mt-2 gap-3">
                        {preview && (
                            <img
                                src={preview}
                                alt="preview"
                                dir='rtl'
                                className="w-48 mt-3 rounded-lg"
                            />
                        )}
                
                    </div>
                    <button
                        dir='rtl'
                        className="bg-blue-500 mt-10 p-2 rounded-2xl font-bold text-white cursor-pointer hover:bg-blue-600 duration-300"
                        onClick={addBlog}
                    >
                        أضف المقال
                    </button>

    
                </div>

            </div>
        </>
    );
}

export default NewBlog;