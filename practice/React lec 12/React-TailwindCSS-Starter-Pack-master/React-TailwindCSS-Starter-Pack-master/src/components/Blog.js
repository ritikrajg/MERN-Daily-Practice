import React, { useContext } from "react";
import { AppContext } from "../hooks/AppContext";
import BlogDetails from "./BlogDetails";

const Blog = () => {
  const {posts,loading}=useContext(AppContext)
  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="flex-col w-2/5 mx-auto overscroll-auto">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-3xl font-bold text-center">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-3xl font-bold text-center">No Blogs Found !</p>
        </div>
      ):(
        posts.map((item) => (
        <BlogDetails key={item.id} item={item}/>
      ))
      )}
    </div>
  );
};

export default Blog;