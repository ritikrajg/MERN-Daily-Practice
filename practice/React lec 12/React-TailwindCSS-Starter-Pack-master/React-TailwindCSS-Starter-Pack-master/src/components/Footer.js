import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../hooks/AppContext';
const Footer = () => {
    const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 py-2 bg-white border-t-2 border-t-gray-300">
      <div className="flex items-center w-11/12 max-w-2xl mx-auto gap-x-3">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-1 border-2 border-gray-300 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-1 border-2 border-gray-300 rounded-md"
          >
            Next
          </button>
        )}
        <p className="ml-auto text-sm font-semibold">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Footer