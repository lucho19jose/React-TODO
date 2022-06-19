import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className='row'>
      <span className={`span-completed ${props.completed && 'Icon-check--active'}`}>√</span>
      <p className={`resetvalues ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
      <span className='span-delete'>X</span>
    </li>
  );
}

export { TodoItem };