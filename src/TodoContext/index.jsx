import React from 'react'
import { TodoSearch } from '../TodoSearch';
import { useLocalStorage } from './UseLocalStorage';
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);


  const [ searchValue, setSearchValue ] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const addNewTodo = (newtodo) => {
    const newTodos = [...todos];
    newTodos.push({
      id: generateoneID(),
      completed: false,
      text: newtodo
    })
    saveTodos(newTodos);
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

  const generateoneID = () => {
    let i = todos.length;
    while(true){
      if(todos.filter(el => el.id == i).length < 1){
        break;
      }
      i++;
    }
    console.log("Generating ID", i)
    return i;
  }

  return (
    <TodoContext.Provider value={{
      error,
      loading,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      filteredTodos,
      onCompleteTodo,
      onDeleteTodo,
      openModal,
      setOpenModal,
      addNewTodo
    }}>
      { props.children }
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }