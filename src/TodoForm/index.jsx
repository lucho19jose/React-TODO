import React, { Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './todoForm.css'
import { TodoContext } from '../TodoContext'


function TodoForm() {
  const { addNewTodo, setOpenModal } = React.useContext(TodoContext);
  
  const [value, setValue] = React.useState('');

  const cancel = () =>{
    console.log("cancel mdoa");
    setOpenModal(prevState => !prevState);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const newtask = () =>{
    console.log({ id: 5, text: value, completed: false });
    addNewTodo({ id: 3, text: value, completed: false })
    setOpenModal(false);
    console.log("this is a new task");
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
            value={value}
            onChange={handleChange}
            style={{ width: '100%' }}
            placeholder="algo que no puede explicar..."
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