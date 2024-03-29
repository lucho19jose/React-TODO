import React from 'react';
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
function TodoSearch({ searchValue, setSearchValue }) {
    const divStyle = {
        width: '350px'
    };

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
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
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
        </div>
    );
}

export { TodoSearch };