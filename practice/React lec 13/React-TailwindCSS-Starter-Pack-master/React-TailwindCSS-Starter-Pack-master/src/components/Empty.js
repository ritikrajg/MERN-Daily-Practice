import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <div className="text-center py-12">
      <div className="mb-6">
        <svg 
          className="mx-auto h-24 w-24 text-gray-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" 
          />
        </svg>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty!</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Looks like you haven't added any items to your cart yet. Start shopping to see some amazing products!
      </p>
      
      <Link 
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 font-semibold"
      >
        Start Shopping
      </Link>
    </div>
  );
};

export default Empty;