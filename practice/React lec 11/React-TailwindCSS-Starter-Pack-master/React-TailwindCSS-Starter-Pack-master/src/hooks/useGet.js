import React, { useEffect, useState } from 'react'

const useGet = (page) => {
   const [loading,setLoading]=useState(false)
   const [pages,setPages]=useState(1)
   const [totalPages,setTotalPages]=useState(null)
   const [posts,setPosts]=useState([])
   const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
   async function fetchData(){
      setLoading(true)
      const result=await fetch(`${baseUrl}?page=${page}`)
      const data=await result.json()
      console.log(data);
      setPages(data?.page)
      setTotalPages(data?.totalPages)
      setPosts(data?.posts)
      setLoading(false)
   }
   useEffect(()=>{
    fetchData()
   },[])
   return {loading,pages,totalPages,posts}
}

export default useGet