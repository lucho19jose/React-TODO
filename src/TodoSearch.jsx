import react from "react";
import './TodoSearch.css';
function TodoSearch(){
    return(
        <div className="search-container">
            <input className="searcher" placeholder="Cebolla" />
        </div>
    );
}

export { TodoSearch };