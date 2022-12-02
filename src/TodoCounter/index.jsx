import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter({ completedTodos, totalTodos }) {
  return (
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter };