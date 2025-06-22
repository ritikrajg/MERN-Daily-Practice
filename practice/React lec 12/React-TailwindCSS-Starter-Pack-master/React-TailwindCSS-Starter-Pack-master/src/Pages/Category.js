import React from 'react'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Category = () => {
    const navigate=useNavigate();
    const loaction=useLocation()
    const category=loaction.pathname.split('/').at(-1).replaceAll("-"," ")
  return (
    <div>
        <Navbar/>
        <div>
            <button onClick={()=>navigate(-1)}></button>
        </div>
        <h2>
            Blogs on <span>{category}</span>
        </h2>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Category