import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Redux/CartSlice';

const Cards = ({ posts }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(posts));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img 
          src={posts.image} 
          alt={posts.title}
          className="w-20 h-20 object-contain"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
          {posts.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {posts.description}
        </p>
        <div className="text-lg font-bold text-green-600 mt-2">
          ${posts.price}
        </div>
      </div>
      
      <button 
        onClick={handleRemove}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
      >
        Remove
      </button>
    </div>
  );
};

export default Cards;