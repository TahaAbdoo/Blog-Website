import React from "react";
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import {Table} from "@heroui/react";

const Categories = () => {
        const id=JSON.parse(window.localStorage.getItem('user'))._id;

        const [CategoryName,setCategoryName]=React.useState('');
        const [Categories,setCategories]=React.useState([]);
        const notify = (msg) => toast(msg);
        
        const addCategory= async()=>{
            try{
            const res= await  axios.post("http://localhost:5500/addCategory",{
                name:CategoryName
            })
            console.log(res.data);
            notify(res.data.msg);
            setCategoryName("");
             await getCategories();

            }catch(err){
                console.log(err)
            toast.error("حدث خطأ أثناء الإرسال ❌");

            }
        }
        const getCategories=async()=>{
            try{
            const res= await  axios.get(`http://localhost:5500/getCategories?userId=${id}`);
            console.log(res.data);

            setCategories(res.data.data); //
            }
            catch(err){
                console.log("erorr")
            }



        }
        React.useEffect(()=>{
                getCategories();
            },[])
    return (
        <>
        <ToastContainer/>
            <div className="flex flex-col justify-center items-center gap-3 my-25">
                <Input onChange={e=>{setCategoryName(e.target.value)}} aria-label="Name" className="w-64 bg-[#18181B] text-white" placeholder="أضف تصنيفك" dir="rtl" />
                <Button onClick={addCategory} variant="secondary">
                    +
                    أضف التصنيف
                </Button>
            </div>
                <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150 text-center">
          <Table.Header className=" text-center">
            <Table.Column isRowHeader className=" text-center">إسم التصنيف</Table.Column>
            <Table.Column className=" text-center">id</Table.Column>

          </Table.Header>
          <Table.Body>
           {Categories.map((category,index)=>(
            <Table.Row key={index}>
              <Table.Cell>{category.name}</Table.Cell>
              <Table.Cell>{category._id}</Table.Cell>

            </Table.Row>
           ))}
            


          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
        </>
    )


}
export default Categories;