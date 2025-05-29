import React, { useState } from 'react';
import './App.css';
import data from './data';
import Tour from './components/Tour';

function App() {
  const [tours,setTours]=useState(data);
  function deleteHandler(id){
     const newData=tours.filter(tour=>tour.id!==id)
     setTours(newData)
  }
  if(tours.length==0){
    return(
      <div>
        <div>No Tours Left</div>
        <button onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tour tours={tours} removeTours={deleteHandler}></Tour>
    </div>
  )
}

export default App;
