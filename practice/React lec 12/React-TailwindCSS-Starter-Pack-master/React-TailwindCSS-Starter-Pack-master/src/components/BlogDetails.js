import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({item}) => {
  return (
    <div key={item.id} className="p-4 mb-6 border rounded">
          <NavLink to={`/blog/${item.id}`}><div className="text-xl font-bold">{item.title}</div></NavLink>
          <div className="text-sm text-gray-500">By <span>{item.author}</span>
          <span>on{" "}</span>
          <NavLink to={`/categories/${item.category.replaceAll(" ","-")}`}><span>{item.category}</span></NavLink>
          </div>
          <div className="text-sm text-gray-400">Posted on {item.date}</div>
          <div className="my-2">{item.content}</div>
          <div className="text-blue-600">
            {item.tags.map((tag, index) => (
              <NavLink
                to={`/tag/${tag.replaceAll(" ","-")}`}
                key={index}
                className="mr-3 underline decoration-blue-600"
                href="#"
              >
                #{tag}
              </NavLink>
            ))}
          </div>
        </div>
  )
}

export default BlogDetails