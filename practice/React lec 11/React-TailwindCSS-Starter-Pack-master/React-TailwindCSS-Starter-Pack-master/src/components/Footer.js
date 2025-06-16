import React from "react";

const Footer = ({ page, totalPages, pageHandler }) => {
  return (
    <div className="sticky bottom-0 p-2 bg-white border-t-2 shadow-md border-t-gray-300">
      <div className="flex place-content-evenly">
        <div>
          <button
            onClick={() => pageHandler(page - 1)}
            disabled={page <= 1}
            className="pt-1 pb-1 pl-4 pr-4 border-2 border-gray-300 rounded mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => pageHandler(page + 1)}
            disabled={page >= totalPages}
            className="pt-1 pb-1 pl-4 pr-4 border-2 border-gray-300 rounded"
          >
            Next
          </button>
        </div>
        <div>
          page {page} of {totalPages}
        </div>
      </div>
    </div>
  );
};

export default Footer;
