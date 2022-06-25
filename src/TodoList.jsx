import react from "react";
import './TodoList.css';

const styleul = {
    width: '400px'
}

function TodoList(props){
    return(
        <section className="section-container">
            <ul style={styleul}>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };