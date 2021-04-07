import React from 'react';
import './Search.css';

function Search(props) {
  return(
    <form className="searchForm">
    <label>
        Search 
        <input
          type="text" 
          name="nomFilm"
          placeholder={props.placeholder}
          onChange={props.handleChange}/>
    </label>
    </form>
  );
}

export default Search;