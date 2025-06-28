import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const { total } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center text-lg mb-4">
          <span className="text-gray-600">Total:</span>
          <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
        </div>
        
        <button 
          onClick={handleCheckout}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 font-semibold text-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Total;