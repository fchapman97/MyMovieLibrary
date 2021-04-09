import React from 'react';
import './Header.css';

export default function Header() {
  return(
    <div className="headerContainer"> 
      <Title />
      <Search />
      <LogButton />
    </div>
  );
}

function Title() {
  return(
    <h1 className="headerTitle">NO CHILL MOVIES</h1>
  );
}

function Sort()  {
  return (
    <form className="sortForm">
      <label>
        Catégorie 
        <select>
          <option value="fantastique">Fantastique</option>
          <option value="aventure">Aventure</option>
          <option value="romantique">Romantique</option>
          <option value="action">Action</option>
        </select>
      </label>
    </form>
  );
}

function Search(props) {
  return(
    <form className="searchForm">
    <label>
        <input
          type="text" 
          name="nomFilm"
          placeholder="Rechercher un film"
          className="inputSearch"/>
    </label>
    </form>
  );
}

function LogButton(props) {
  return(
    <button 
      className="logButton"
      type="button"
    >
      Log in
    </button>
  );
}