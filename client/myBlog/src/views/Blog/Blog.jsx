import React from "react";
import axios from "axios";
import { Button, Surface } from "@heroui/react";
import { useLocation } from "react-router-dom";

const Blog = () => {
    const location = useLocation();
    const Blog = location.state;
    const [blog, setBlog] = React.useState(null);
    const getBlog = async () => {
                

        const res = await axios.get(`http://localhost:5500/blog/${blog.image.path}`);
        console.log("to be sure "+blog);
        console.log(res.data.data.image);
        setBlog(res.data.data);
    }
    React.useEffect(() => {
        getBlog();
    }, []);
    return (
        <div className="flex flex-col gap-4" dir="rtl">
            <div className="flex flex-col gap-2">
                <Surface className="flex min-w-[320px] flex-col gap-3 rounded-3xl p-6" variant="tertiary">
                                        <div>
                        {blog && (
                            <img
                                src={`http://localhost:5500/${blog.image}`}
                                alt="blog"
                                className="w-full rounded-lg"
                            />
                        )}
                    </div>
                    <h1 className="text-4xl font-semibold text-foreground">{Blog.Address}</h1>
                    <p className="text-lg text-[#2C2C2C]">
                        {Blog.Description}
                    </p>

                    <code className="text-xs mt-10 text-red-900 bg-slate-400 p-2 rounded-lg w-fit font-bold">
                        كتبت بواسطة :طه
                        <br />
                        في الساعة :{Blog.Time}
                    </code>

                </Surface>
            </div>

        </div>
    );
};

export default Blog;