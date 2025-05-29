import React from 'react'
import Card from './Card'
function Tour (props) {
    function removeHandler(id){
        props.removeTours(id)
    }
  return (
    <div>
    <div>Plan with Love</div>
    <div>
      {props.tours.map(item=>{
        return <Card key={item.id}{...item} removeTour={removeHandler}></Card>
      })}
    </div>
    </div>
  )
}
export default Tour;
