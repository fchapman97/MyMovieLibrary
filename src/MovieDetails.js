import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import './MovieDetails.css';
import YouTube from 'react-youtube';
import getVideoId from 'get-video-id';
import Trad from './Trad';

function MovieDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [peoplesAreLoaded, setPeoplesAreLoaded] = useState(false);
  const [movie, setMovie] = useState([]);
  const [peoples, setPeoples] = useState([]);
  let movieId = query.get("id");

  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Movie ID : ${movieId}`);
    //console.log(`Fetching movie details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/movies/:${movieId}`)
      .then(res => res.json())
      .then(
        (result) => {
          //console.log("Result : ", result);          
          setMovie(result[0]);
          setIsLoaded(true);
          console.log("Movie : ", movie);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      fetch(process.env.REACT_APP_SERVER_API + "/peoples")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result movies : ", result);
          setPeoples(result);          
          setPeoplesAreLoaded(true); 
        },        
        (error) => {
          setPeoplesAreLoaded(true);
          setError(error);
        }
      )
  }, [])

  // console.log("Movie OOOKKK : ", movie.actors[0].id);
  // console.log("GENRE OOOKKK : ", movie.genre);
  // console.log("Peoples OOOKKK : ", peoples);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded || !peoplesAreLoaded ) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <h1 className="titleMovieDetails">{movie.title}</h1>
        <div className="divMovieDetailsInfos1">
          <img src={movie.posterLink} className="imgMovieDetails"/>
          <div className="infosMovieDetails">            
            <span>
              Date : {movie.releaseDate} / 
              Durée : {movie.duration} minutes / 
              Genre : 
              <span>
              {
                movie.genre && movie.genre.map(newGenre => (
                  <span key={newGenre}> <Trad mot={newGenre}/></span>
                ))  
              } 
              </span>
            </span>
            <span>Réalistaeur :            
              {
                movie.directors && movie.directors.map(directorId => (
                  // <span>{directorId}</span>  
                  <span key={directorId}>
                  {
                    peoples && peoples.map(people => (   
                      <span key={people._id}>
                        { directorId == people._id
                        ? ( 
                            <span> {people.firstname} {people.lastname}</span> 
                          ) 
                        : (
                            <span></span>
                          )
                        }
                      </span>
                    ))
                  }  
                  </span>
                ))  
              }  
            </span> 
            <span>Acteurs : 
              {
                movie.actors && movie.actors.map(actor => (
                  <span key={actor._id}>
                  {
                    peoples && peoples.map(people => (
                      <span key={people._id}>
                        { actor.id == people._id
                        ? ( 
                            <span> {people.firstname} {people.lastname} *</span>
                            //<span>{peoples.length}</span>
                            //setActors(people);
                          ) 
                        : (
                            <span></span>
                          )
                        }
                      </span>
                    ))
                  }  
                  </span>
                ))  
              }
            </span> 
            <span>Description : {movie.synopsis}</span> 
          </div>
        </div>
        <div className="divMovieDetailsInfos2">
          <div className="divMovieDetailsTrailer">
            <h2>Bande annonce</h2>
                {movie.trailerLink
                ? ( 
                    <YouTube videoId={getVideoId(movie.trailerLink).id} />
                  ) 
                : (
                    <span>notOk</span>
                  )                  
                }
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;