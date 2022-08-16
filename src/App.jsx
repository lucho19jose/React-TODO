import { useState } from 'react'
import { CreateTodoButtom } from './CreateTodoButton'
//import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const todos = [
  { id: 1, text: 'Cortar cebolla', completed: true },
  { id: 2, text: 'Tomar el curso de React', completed: false },
  { id: 3, text: 'Invitarte a salir a comer', completed: false },
  { id: 4, text: 'Invitarte a salir a vivir', completed: false },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButtom></CreateTodoButtom>
    </>
  )
}

export default App
