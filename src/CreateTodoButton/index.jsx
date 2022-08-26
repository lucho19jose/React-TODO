import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

import { TodoContext } from '../TodoContext'

function CreateTodoButtom(props){
    const { openModal, setOpenModal } = React.useContext(TodoContext);
    const newtask = () => {
        setOpenModal(prevState => !prevState);
        console.log("hello world");
    }
    return(
        <div className="button-container">
            <Button 
                variant="contained" 
                color="success"
                onClick={newtask}
            >
                nueva tarea +
            </Button>
        </div>
    );
}

export { CreateTodoButtom};
