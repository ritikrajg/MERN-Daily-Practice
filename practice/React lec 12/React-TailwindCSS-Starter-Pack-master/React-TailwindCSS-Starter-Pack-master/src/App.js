import React, { useContext, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import Category from './Pages/Category';
import Tag from './Pages/Tag';
import { AppContext } from './hooks/AppContext';

function App() {
  const {fetchBlogPosts}=useContext(AppContext)
  const [searchParams,setSearchParams]=useSearchParams()
  const loaction=useLocation()
  useEffect(()=>{
    const page=searchParams.get('page')??1;
    if(loaction.pathname.includes('tag')){
      const tag=loaction.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page),tag)
    }
    else if(loaction.pathname.includes('categories')){
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchBlogPosts(Number(page),null,category)
    }
    else{
      fetchBlogPosts(Number(page))
    }
  },[loaction.pathname,loaction.search])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
        <Route path="/categories/:category" element={<Category/>}></Route>
        <Route path="/tag/:tag" element={<Tag/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
