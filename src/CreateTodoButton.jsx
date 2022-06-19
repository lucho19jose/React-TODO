import react from "react";
import './Button.css';

function CreateTodoButtom(props){
    return(
        <div className="button-container">
            <button className="button">+</button>
        </div>
    );
}

export { CreateTodoButtom};
