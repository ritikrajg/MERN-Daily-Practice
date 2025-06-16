import React from "react";

const Content = ({ loading, posts }) => {
  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="flex-col w-2/5 mx-auto overscroll-auto">
      {posts.map((item) => (
        <div key={item.id} className="p-4 mb-6 border rounded">
          <div className="text-xl font-bold">{item.title}</div>
          <div className="text-sm text-gray-500">By {item.author}</div>
          <div className="text-sm text-gray-400">Posted on {item.date}</div>
          <div className="my-2">{item.content}</div>
          <div className="text-blue-600">
            {item.tags.map((tag, index) => (
              <a
                key={index}
                className="mr-3 underline decoration-blue-600"
                href="#"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;