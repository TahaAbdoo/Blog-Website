import React from 'react';
import Login from './Dashboard/Login/Login';
import { useState } from 'react'
import './App.css'
import Main from './Dashboard/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Dashboard/Home/Home';
import AddBlog from './views/AddBlog/AddBlog';
import Blog from './views/Blog/Blog';
import Categories from './views/Categories/Categories';
function App() {
      const [login, setLogin] = useState(false);

      React.useEffect(()=>{
        let checklogin=window.localStorage.getItem('login');
        setLogin(checklogin);

      },[login])
    return (
      <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={login?<Main view ={<Home/>}/>:<Login/>} />
        <Route path="/login" element={login?<Main/>:<Login/>} />
        <Route path="/main" element={ login?<Main view ={<Home/>}/>:<Login/>} />
        <Route path="/add-blog" element={ login?<Main view ={<AddBlog/>}/>:<Login/>} />
        <Route path="/blog/:id" element={ login?<Main view ={<Blog/>}/>:<Login/>} />
        <Route path="/Categories" element={ login?<Main view ={<Categories/>}/>:<Login/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
