import React from 'React'
import { useLocalStorage } from './UseLocalStorage';
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);


  const [ searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

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
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      filteredTodos,
      onCompleteTodo,
      onDeleteTodo,

    }}>
      { props.children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }