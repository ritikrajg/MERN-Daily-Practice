import React from 'react'
import toast from 'react-hot-toast';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
const Cards = (props) => {
  const handleClick = () => {
    console.log("clicked");
toast.success("Toast triggered");

  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>
          <FcLikePlaceholder fontSize="1.75rem" /> 
        </button>
      </div>
      <div>{props.title}</div>
      <div>{props.description}</div>
      <div>
        <img src={props.image.url}></img>
      </div>
    </div>
  )
}

export default Cards