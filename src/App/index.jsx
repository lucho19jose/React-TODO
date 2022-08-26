import { useState } from 'react'
import react from "react";
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext'
//import './App.css'

const defaultTodos = [
  { id: 1, text: 'Cortar cebolla', completed: true },
  { id: 2, text: 'Tomar el curso de React', completed: false },
  { id: 3, text: 'Invitarte a salir a comer', completed: false },
  { id: 4, text: 'Invitarte a salir a vivir', completed: false },
]

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
