import React from "react";


function SearchBar(props){
    return (
        <div className="md-form active-cyan active-cyan-2 mb-3">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" value={props.currentInput} onChange={props.handleInput}/>
        </div>
    );
}


export default SearchBar;