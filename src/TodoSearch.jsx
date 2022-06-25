import react from "react";
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
function TodoSearch(){
    const divStyle = {
        width: '350px'
    };

    return(
        <div className="search-container">
            {/* <input className="searcher" placeholder="Cebolla" /> */}
            <div style={divStyle}>
                <TextField 
                    id="standard-basic" 
                    variant="outlined"
                    placeholder="buscame..."
                    fullWidth 
                />
            </div>
        </div>
    );
}

export { TodoSearch };