import React from 'react';

import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodoContext } from '../TodoContext'
//import { Modal } from '../Modal'

function AppUI(){

  const { 
    error,
    loading,
    filteredTodos,
    onCompleteTodo,
    onDeleteTodo
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
          {error && <div>hubo un error...</div>}
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
        {/* <Modal>
          <p>Teletransportacion</p>
        </Modal> */}
      <CreateTodoButtom></CreateTodoButtom>
    </>
  );
}

export { AppUI };