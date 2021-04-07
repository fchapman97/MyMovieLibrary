import React from 'react';
import './Movie.css';
  
function Movie(props) {
    const movie = props.data.map((data) =>
      <div 
        key={data.id} 
        className="movie">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    );
    return (
      <div className="moviesContainer">
        {movie}
      </div>
    );
  }


export default Movie;