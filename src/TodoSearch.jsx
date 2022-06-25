import react from "react";
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
function TodoSearch(){
    const divStyle = {
        width: '350px'
    };

    const onSearchValueChange = (event) =>{
        console.log(event.target.value);
    }

    return(
        <div className="search-container">
            {/* <input className="searcher" placeholder="Cebolla" /> */}
            <div style={divStyle}>
                <TextField 
                    id="standard-basic" 
                    variant="outlined"
                    placeholder="buscame..."
                    fullWidth 
                    onChange={onSearchValueChange}
                />
            </div>
        </div>
    );
}

export { TodoSearch };