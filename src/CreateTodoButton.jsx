import react from "react";
import Button from '@mui/material/Button';
 
import './Button.css';

function CreateTodoButtom(props){
    return(
        <div className="button-container">
            <Button variant="contained" color="success">nueva tarea +</Button>
            {/* <button className="button">+</button> */}
        </div>
    );
}

export { CreateTodoButtom};
