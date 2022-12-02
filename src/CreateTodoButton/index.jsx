import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

function CreateTodoButtom({ openModal, setOpenModal }){
    const newtask = () => {
        setOpenModal(prevState => !prevState);
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
