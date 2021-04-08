import React from 'react';
import './Movie.css';

function Movie(props) {
  return (
    <div 
      key={props.movie._id} 
      className="movie"
    >
      <h3>{props.movie.title}</h3>
      <p>{props.movie.synopsis}</p>
    </div>
  );
}