import React from 'react';

import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoContext } from '../TodoContext'
import { ModalUI } from '../Modal'
import { TodoForm } from '../TodoForm'

function AppUI(){

  const { 
    error,
    loading,
    filteredTodos,
    onCompleteTodo,
    onDeleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
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
            <ModalUI>
              <TodoForm/>
            </ModalUI>
          )
        }
      <CreateTodoButtom></CreateTodoButtom>
    </>
  );
}

export { AppUI };