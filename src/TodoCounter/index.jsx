import react from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter() {
  const { completedTodos, totalTodos } = react.useContext(TodoContext);

  return (
      <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  )
}

export { TodoCounter };