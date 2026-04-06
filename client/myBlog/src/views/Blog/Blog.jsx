import React from "react";
import axios from "axios";
import { Surface } from "@heroui/react";
import { useLocation } from "react-router-dom";

const Blog = () => {
            const username=JSON.parse(window.localStorage.getItem('user')).username;

    const location = useLocation();
    const BlogData = location.state; // 🔥 غير الاسم باش ما تتلخبطش

    const [blog, setBlog] = React.useState(null);
    const id=JSON.parse(window.localStorage.getItem('user'))._id;
    console.log(id);
    const getBlog = async () => {
        try {
            const res = await axios.get(`http://localhost:5500/blog/${BlogData._id}`);
            console.log(res.data.data);
            setBlog(res.data.data);
        } catch (err) {
            console.log(id);
            console.log(err);
        }
    };

    React.useEffect(() => {
        getBlog();
    }, []);

    return (
        <div className="flex flex-col gap-4" dir="rtl">
            <div className="flex flex-col gap-2">
                <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="tertiary">

                    <div>
                        {blog && blog.image && (
                            <img
                                src={`http://localhost:5500/${blog.image.path}`} // ✅ الصح
                                alt="blog"
                                className="w-full rounded-lg"
                            />
                        )}
                    </div>

                    <h1 className="text-4xl font-semibold text-foreground">
                        {blog?.Address}
                    </h1>

                    <p className="text-lg text-[#2C2C2C]">
                        {blog?.Description}
                    </p>

                    <code className="text-xs mt-10 text-red-900 bg-slate-400 p-2 rounded-lg w-fit font-bold">
                     كتبت بواسطة :  {username} 
                        <br />
                        في الساعة : {blog?.Time}
                    </code>

                </Surface>
            </div>
        </div>
    );
};

export default Blog;