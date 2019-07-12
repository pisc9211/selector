import React from 'react'
import './Shape.css'


const Shape = ({name, handleClick}) => {
  return <li className='shape'>
    <div className = {name[0].toLowerCase() + name.slice(1)+ ' shape-indiv'} name={name} onClick={handleClick}></div>
  </li>
}

export default Shape