import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartSlice";

const Card = ({ posts }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const isInCart = items.some((item) => item.id === posts.id);

  const handleAddToCart = () => {
    dispatch(addToCart(posts));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(posts));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <div className="h-48 flex items-center justify-center mb-4">
          <img 
            src={posts.image} 
            alt={posts.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {posts.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {posts.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-green-600">
            ${posts.price}
          </div>
          
          {isInCart ? (
            <button 
              onClick={handleRemoveFromCart}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Remove</span>
            </button>
          ) : (
            <button 
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-1"
            >
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
