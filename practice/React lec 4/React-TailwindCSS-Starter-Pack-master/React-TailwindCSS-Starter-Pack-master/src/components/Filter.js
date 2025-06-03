import React from "react";

const Filter = ({ filter,setCategory }) => {
  return (
    <div>
      {filter.map((item) => {
        return(<button key={item.id} onClick={()=>setCategory(item.title)}>{item.title}</button>);
      })}
    </div>
  );
};

export default Filter;
