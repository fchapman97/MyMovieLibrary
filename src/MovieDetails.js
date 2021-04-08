import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
//import './MovieDetails.css';

function MovieDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  let movieId = query.get("id");
  
  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Movie ID : ${movieId}`);
    console.log(`Fetching movie details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/movies?_id=${movieId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setMovie(result[0]);
          console.log("Movie : ", movie);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      console.log("Fetching movie details OK !");
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <h3>Détail du film</h3>
        <div>
          <p>ID : {movie._id}</p>
          <p>Titre : {movie.title}</p>
          <p>Synopsis : {movie.synopsis}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetails;