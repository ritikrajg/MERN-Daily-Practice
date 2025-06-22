import React, { createContext, useEffect, useState } from 'react'


export const AppContext = createContext()
const baseUrl=`https://codehelp-apis.vercel.app/api/get-blogs`
export default function AppContextProvider({children}){
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)
    const [page,setPage]=useState(1)
    const [totalPages,setTotalPages]=useState(null)
    const fetchBlogPosts=async (page=1,tag=null,category)=>{
       setLoading(true)
       let url=`${baseUrl}?page=${page}`
       if(tag){
        url+=`&tag=${tag}`
       }
       if(category){
        url+=`&category=${category}`
       }
       try{
        const res=await fetch(url)
        const data=await res.json()
        if (!data.posts || data.posts.length === 0)
            throw new Error("Something Went Wrong");
        console.log("Api Response", data);
        setPage(data.page)
        setPosts(data.posts)
        setTotalPages(data.totalPages)
       }catch(error){
        console.log("Error in fetching")
        setPage(1)
        setPosts([])
        setTotalPages(null)
       }
       setLoading(false)
    }
    useEffect(()=>{
        fetchBlogPosts(page)
    },[page])
    const handlePageChange=(page)=>{
        setPage(page)
    }
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }
    return<AppContext.Provider value={value}>{children}</AppContext.Provider>
}