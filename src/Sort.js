import React from 'react';
import './Search.css';

function Sort(props)  {
  return (
    <form>
      <label>
        Catégorie 
        <select onChange={props.handleChange}>
          <option value="fantastique">Fantastique</option>
          <option value="aventure">Aventure</option>
          <option value="romantique">Romantique</option>
          <option value="action">Action</option>
        </select>
      </label>
    </form>
  );
  
}

export default Sort;