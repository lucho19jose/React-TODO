import { useState } from 'react'
import React from 'react';
//import './App.css'

import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { useTodos } from './useTodos'
import { ModalUI } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoHeader } from '../TodoHeader'

function App() {
  const { 
    error,
    loading,
    filteredTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    addNewTodo,
    setOpenModal,
  } = useTodos();

  
  return (
    <>
    <TodoHeader>
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </TodoHeader>
        <TodoList>
          {loading && <p>Loading...</p>}
          {!loading &&  filteredTodos.length === 0 && <div>No hay todos, Crea tu primer TODO</div>}  
  
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
        {
          openModal && (
            <ModalUI
            openModal={openModal}
            setOpenModal={setOpenModal}
            >
              <TodoForm
                addNewTodo={addNewTodo}
                setOpenModal={setOpenModal}
              />
            </ModalUI>
          )
        }
      <CreateTodoButtom
        openModal ={openModal}
        setOpenModal={setOpenModal}
      ></CreateTodoButtom>
    </>
  );
}

export default App
