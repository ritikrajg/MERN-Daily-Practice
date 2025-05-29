import React, { useState } from 'react'

function Card({id,price,image,info,name,removeTour}) {
    const [visible,setVisible]=useState(true)
    const str=visible?`${info.substring(0,200)}....`:`${info}`;
    function visiHandler(){
        setVisible(!visible)
    }
  return (
    <div>
        <div>
            <img src={image}/>
        </div>
        <div>
            <div>{price}</div>
        </div>
        <div>
            <div>{name}</div>
        </div>
        <div>
            <div>
                {str}
                <span onClick={visiHandler}>{visible?"Read More":"Show Less"}</span>   
            </div>
        </div>
        <div>
            <button onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
    </div>
  )
}
export default Card;