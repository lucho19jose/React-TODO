import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './todoForm.css'

function TodoForm({ addNewTodo, setOpenModal }) {
  
  const [valueTodo, setValueTodo] = React.useState('');

  const cancel = () =>{
    setOpenModal(prevState => !prevState);
  };

  const handleChange = (event) => {
    //console.log(event.target.value);
    setValueTodo(event.target.value);
  };

  const newtask = () =>{
    addNewTodo(valueTodo)
    setOpenModal(false);
  }

  return (
    <form>
      <h3>Crea nuevos TODO's</h3>
      <div style={{ width: '100%' }}>
        <TextField
            id="outlined-multiline-flexible"
            label="agregar"
            multiline
            maxRows={4}
            value={valueTodo}
            onChange={handleChange}
            style={{ width: '100%' }}
            placeholder="algo que no puede explicar..."
            inputRef={input => input && input.focus()}
          />
      </div>
      <div className='btns'>
        <Button 
            color="secondary"
            onClick={cancel}
        >
          Cancelar
        </Button>
        <Button 
            variant="contained" 
            color="success"
            onClick={newtask}
        >
          Añadir
        </Button>
      </div>
    </form>
  )
}

export { TodoForm };