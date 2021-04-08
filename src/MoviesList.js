import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

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
      <h3>Liste des films</h3>
      { !isLoaded 
        ? ( <div>Chargement...</div> ) 
        : (
          <div id="moviesContainer">
            {
              movies.map(movie => (
                <p key={movie._id}>
                  <Link to={`/movieDetails?id=${movie._id}`}>
                    <span>{movie._id} {movie.title}</span>
                  </Link>
                </p>
              ))
            }
          </div>
        )
      }
    </div>
  );
}

export default MoviesList;