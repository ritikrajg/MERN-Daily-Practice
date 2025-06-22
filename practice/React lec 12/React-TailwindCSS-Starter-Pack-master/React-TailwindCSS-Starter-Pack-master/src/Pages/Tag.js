import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
const Tag = () => {
    const loaction=useLocation()
    const navigate=useNavigate()
    const tag=loaction.pathname.split('/').at(-1)
  return (
    <div>
        <Navbar/>
        <div>
            <div>
                <button onClick={()=>navigate(-1)}>Back</button>
            </div>
            <h2>
                Blog Tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Tag