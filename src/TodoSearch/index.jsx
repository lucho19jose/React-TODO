import React from 'react';
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'
function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

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