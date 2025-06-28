import React from "react";
import Cards from "./Cards";
import Total from "./Total";
import { useSelector } from "react-redux";

const Items = () => {
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Items ({items.length})</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <Cards key={item.id} posts={item} />
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <Total />
      </div>
    </div>
  );
};

export default Items;
