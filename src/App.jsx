import { useState } from 'react'
import react from "react";
import { CreateTodoButtom } from './CreateTodoButton'
//import './App.css'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: true },
  { id: 2, text: 'Tomar el curso de React', completed: false },
  { id: 3, text: 'Invitarte a salir a comer', completed: false },
  { id: 4, text: 'Invitarte a salir a vivir', completed: false },
]


function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState(defaultTodos);

  const [ searchValue, setSearchValue ] = react.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const onCompleteTodo = (id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  }

  const onDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
            key={todo.id} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>onCompleteTodo(todo.id)}
            onDelete={()=>onDeleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButtom></CreateTodoButtom>
    </>
  )
}

export default App
