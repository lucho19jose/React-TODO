import react from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="section-container">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };