import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './MoviesList.css';
import Trad from './Trad';

function MoviesList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);

  // Fetching data
  console.log(`"Fetching movies from ${process.env.REACT_APP_SERVER_API}...`);
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
  console.log("Fetching movies OK !");

  return (
    <div>
      { error 
        ? ( <div>
              <h1 className="titleTouslesFilms">
                  <div>AUCUN FILM DISPONIBLE</div> 
              </h1>
            </div> )
        : ( 
            <div>
              <h1 className="titleTouslesFilms">
                  <div>Tous les films</div> 
              </h1>
              { !isLoaded 
              ? ( <div>Chargement...</div> ) 
              : (
                <div>
                  <Link to={`/addMovie`} className="linkAjouterOneMovie">  
                    <button className="butonAjouterFilm">Ajouter un film</button>
                  </Link>
                  <div id="moviesListContainer">
                    {
                      movies.map(movie => (
                        <div key={movie._id} className="divOneMovie">
                          <img src={movie.posterLink} className="imgOneMovie"/>
                          <div className="infosOneMovie">
                            <Link to={`/movieDetails?id=${movie._id}`} className="titleOneMovie">  
                              <span className="titleOneMovie">TITLE : {movie.title}</span>
                            </Link>
                            <span className="genreOneMovie">Genre :
                              {
                                movie.genre.map(genre => (
                                  <span key={genre}> <Trad mot={genre}/></span>
                                ))  
                              }
                            </span>
                            <span className="durationOneMovie">Duration : {movie.duration} minutes</span>
                            <span className="synopsisOneMovie">Synopsis : {movie.synopsis}</span>
                            <div className="infosDuBas">
                              <Link to={`/deleteMovie?id=${movie._id}`} className="linkDeleteOneMovie">  
                                <button className="boutonDeleteOneMovie">Supprimer</button>
                              </Link>
                              {/* <Link to={`/updateMovie?id=${movie._id}`} className="linkModifierOneMovie">  
                                <button className="boutonModifierOneMovie">Modifier</button>
                              </Link> */}
                              <Link to={`/movieDetails?id=${movie._id}`} className="linkRegarderOneMovie">  
                                <button className="boutonRegarderOneMovie">Regarder {movie.title}</button>
                              </Link>                    
                            </div>
                          </div>   
                        </div>
                      ))
                    }
                  </div>
                </div>
                )
              }
            </div>
          ) 
      }      
    </div>
  );
}

export default MoviesList;