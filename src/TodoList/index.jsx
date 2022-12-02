import React from 'react';
import './TodoList.css';

const styleul = {
    width: '400px'
}

function TodoList(props){
    return(
        <section className="section-container">
            { props.error && props.onError() } 
            { props.loading && props.onLoading() }
            {(!props.loading && !props.filteredTodos.length) && props.onEmptyTodos()}
            
            <ul style={styleul}>
                {props.filteredTodos.map(props.render)}
            </ul>
        </section>
    );
}

export { TodoList };