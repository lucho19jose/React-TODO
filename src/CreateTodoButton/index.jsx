import React from 'react';
import Button from '@mui/material/Button';
 
import './Button.css';

function CreateTodoButtom(props){
    const newtask = () => {
        console.log("create new task");
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
