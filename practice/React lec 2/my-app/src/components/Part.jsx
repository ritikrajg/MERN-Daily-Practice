import React from 'react'
import './Part.css'
const Part = (props) => {
  return (
    <div className='container'>
        <div className='date'>
            <div>{props.month}</div>
            <div>{props.year}</div>
            <div className='firstDate'>{props.date}</div>
        </div>
        <div className='naam'>
            {props.name}
        </div>
    </div>
  )
}

export default Part