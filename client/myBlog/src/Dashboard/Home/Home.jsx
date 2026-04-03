import React from "react";
import axios from "axios";
import { Button } from "@heroui/react";
import { PiCursorClick } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [blogs, setBlogs] = React.useState([]);
    const getBlog = async (id) => {
        try {
            await axios.get(`http://localhost:5500/blog/${id}`).then((res) => {
                console.log(res.data);
                navigate(`/blog/${id}`,{state:res.data.data});
            })
        } catch (err) {
            console.log(err);

        }
    }
    const getBlogs = async () => {
        try {
            const res = await axios.get('http://localhost:5500/allBlogs');
            console.log(res.data);

            setBlogs(res.data.data); // ✅ مهم
        } catch (err) {
            console.log(err);
        }
    }

    React.useEffect(() => {
        getBlogs();
    }, []); // ✅ مهم

    return (
        <div>
            <h1 dir="rtl" className="text-3xl font-bold text-gray-900">
                مرحباً بك في لوحة التحكم 👋
            </h1>

            <p dir="rtl" className="text-2xl font-bold mt-5">المدونات</p>

            <div dir="rtl" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">

                {blogs.map((blog, index) => (
                    <div key={index} className="p-4 rounded-lg shadow-2xl bg-slate-200 cursor-pointer   hover:scale-105  hover:bg-slate-300 duration-400">
                        <h2 className="text-xl font-bold text-gray-900">{blog.Address}</h2>
                        <p className="text-gray-600 mt-2">  {blog.Description.slice(0, 300)}...</p>
                        <Button
                            variant="secondary"
                            className="bg-slate-900 mt-4 flex items-center gap-2 group"
                            onClick={() => getBlog(blog._id)}
                        >
                           إقرأ المزيد
                            <PiCursorClick className="group-hover:translate-x-1 group-hover:scale-110 duration-300" />
                        </Button>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Home;