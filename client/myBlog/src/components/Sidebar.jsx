import React from "react";
import { Link } from "react-router-dom";
import { FaReadme } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { Button, Dropdown, Label } from "@heroui/react";

const Sidebar = () => {
  return (
    <>
    <div  className="float-end">
      <aside  
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-slate-700"
        aria-label="Sidebar"
      >
        <h1 className="text-3xl my-5 mx-7 font-bold text-white" dir='rtl'>دَوّنْ</h1>

        <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
          <ul className="space-y-2 font-medium" dir="rtl">

            {/* Home */}
            <li>
              <Link
                to={"/main"}
                className="bg-slate-300 flex items-center px-2 py-1.5 rounded-2xl duration-300 hover:bg-amber-100"
              >
                <FaReadme className="text-2xl" />
                <span className="ms-3">الصفحة الرئيسية </span>
              </Link>
            </li>



            {/* Add Blog */}
            <li>
              <Link
                to="/add-blog"
                className="bg-slate-300 flex items-center px-2 py-1.5 rounded-2xl hover:bg-amber-100 duration-300"
              >
                <IoIosAddCircle className="text-2xl" />
                <span className="ms-3">أضف مدونة</span>
              </Link>
            </li>

            <li>
              <Link
                to="/Categories"
                className="bg-slate-300 flex items-center px-2 py-1.5 rounded-2xl hover:bg-amber-100 duration-300"
              >
                <IoIosAddCircle className="text-2xl" />
                <span className="ms-3">إضافة تصنيفات</span>
              </Link>
            </li>

            {/* categoryes */}

            <li>
              <Dropdown>
                <Button aria-label="Menu" className="text-black text-[15px]  bg-slate-300 flex items-center px-2 py-1.5 rounded-2xl hover:bg-amber-100 duration-300 ">
                  التصنيفات
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)} dir='rtl'>

                    <Dropdown.Item id="new-file" textValue="New file">
                      <Label>برمجة</Label>
                    </Dropdown.Item>
                    <Dropdown.Item >
                      <Label>طبيعة</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                      <Label>خيال</Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="delete-file" textValue="Edit file" >
                      <Label>أحدث التقنيات</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </li>




            {/* Sign In */}
            <li className=" p-3 absolute bottom-0 left-0 ">
              <Link
                to="/login"
                className="bg-red-700 flex items-center px-2 py-1.5 rounded-2xl hover:bg-amber-100 duration-300"
              >
                <span className="ms-3">Log Out</span>
              </Link>
            </li>

          </ul>
        </div>
      </aside>
      </div>
    </>
  );
};

export default Sidebar;