import react from "react";
import TextField from '@mui/material/TextField';
import './TodoSearch.css';
function TodoSearch(){
    const divStyle = {
        width: '350px'
    };

    const [ searchValue, setSearchValue ] = react.useState('');

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
            <p>{ searchValue }</p>
        </div>
    );
}

export { TodoSearch };