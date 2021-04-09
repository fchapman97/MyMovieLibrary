import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './MoviesList.css';

function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  // Fetching data
  console.log(`"Fetching people from ${process.env.REACT_APP_SERVER_API}...`);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/movies")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setMovies(result);
        },        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log("Fetching people OK !");

  return (
    <div>
      <h1 className="titleTouslesFilms">Tous les films</h1>
      { !isLoaded 
        ? ( <div>Chargement...</div> ) 
        : (
          <div id="moviesListContainer">
            {
              movies.map(movie => (
                <div id={movie._id} className="divOneMovie">
                  <img src={movie.posterLink} className="imgOneMovie"/>
                  <div className="infosOneMovie">
                    <Link to={`/movieDetails?id=${movie._id}`} className="titleOneMovie">  
                      <span className="titleOneMovie">TITLE : {movie.title}</span>
                    </Link>
                    <span className="genreOneMovie">Genre :
                      {
                        movie.genre.map(genre => (
                          <span> {genre}</span>
                        ))  
                      }
                    </span>
                    <span className="durationOneMovie">Duration : {movie.duration} minutes</span>
                    <span className="synopsisOneMovie">Synopsis : {movie.synopsis}</span>
                    <Link to={`/movieDetails?id=${movie._id}`} className="linkRegarderOneMovie">  
                      <button className="boutonRegarderOneMovie">Regarder {movie.title}</button>
                    </Link>                    
                  </div>   
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default MoviesList;