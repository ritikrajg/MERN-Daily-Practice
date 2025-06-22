import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../hooks/AppContext'
import BlogDetails from '../components/BlogDetails'
import Navbar from '../components/Navbar'
const baseUrl=`https://codehelp-apis.vercel.app/api/`
const BlogPage = () => {
  const [blog,setBlog]=useState(null)
  const [relatedblog, setRelatedblog] = useState([]);
  const loaction=useLocation()
  const navigation=useNavigate()
  const {loading,setLoading}=useContext(AppContext)
  const blogId=loaction.pathname.split("/").at(-1)
  
  async function fetchRelatedBlogs() {
    setLoading(true)
    let url=`${baseUrl}get-blog?blogId=${blogId}`
    try{
        const res=await fetch(url)
        const data=await res.json()
        console.log(data)
        setBlog(data.blog)
        setRelatedblog(data.relatedBlogs)
    }catch(error){
        console.log(error)
        setBlog(null)
        setRelatedblog([])
    }
    setLoading(false)
  }
  useEffect(()=>{
    if(blogId){
        fetchRelatedBlogs()
    }
  },[loaction.pathname])
  return (
    <div>
        <Navbar/>
        <div>
        <button onClick={()=>navigation(-1)}>Back</button>
        </div>
        <div>{
            loading?(
                <p>Loading...</p>
            ):blog?(
                <div>
                    <BlogDetails item={blog}/>
                    <h2>Releated Blogs</h2>
                    {
                        relatedblog.map((item)=>(
                            <BlogDetails key={item.id} item={item}/>
                        ))
                    }
                </div>
            ):(
                <p>No Blog Found</p>
            )
        }</div>
    </div>
  )
}

export default BlogPage