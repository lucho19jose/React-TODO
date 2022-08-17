import { useState } from 'react'
import react from "react";
import { AppUI } from './AppUI'
//import './App.css'

const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: true },
  { id: 2, text: 'Tomar el curso de React', completed: false },
  { id: 3, text: 'Invitarte a salir a comer', completed: false },
  { id: 4, text: 'Invitarte a salir a vivir', completed: false },
]


function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
    parsedTodos = defaultTodos;
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = useState(parsedTodos);

  const [ searchValue, setSearchValue ] = react.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const onCompleteTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    saveTodos(newTodos);
  }

  const onDeleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      onCompleteTodo={onCompleteTodo}
      onDeleteTodo={onDeleteTodo}
    />
  )
}

export default App
