import React from "react";

import { CreateTodoButtom } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  filteredTodos,
  onCompleteTodo,
  onDeleteTodo,
}){
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
  );
}

export { AppUI };