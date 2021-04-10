import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import './ActorDetails.css';

function ActorDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actor, setActor] = useState([]);
  const [movies, setMovies] = useState([]);
  let currentActorId = query.get("id");

  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Actor ID : ${currentActorId}`);
    console.log(`Fetching actor details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/peoples?_id=${currentActorId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setActor(result[0]);
          console.log("Actor : ", actor);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      fetch(process.env.REACT_APP_SERVER_API + "/movies")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result movies : ", result);
          setMovies(result);
          setIsLoaded(true);          
        },        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

      console.log("avant",movies);
      if(movies){
        console.log("pendant",movies);
      }
      console.log("apres",movies);
      movies.map(movie => console.log("laaaa",movie));
      console.log("Fetching actor details OK !");
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    console.log("ACTOR OKK : ", actor);
    return (
      <div>
        <h1 className="nomPrenomActorDetails">{actor.firstname} {actor.lastname}</h1>
        <div className="divActorDetailsInfos1">
          <img src={actor.picture} className="imgActorDetails"/>
          <div className="infosActorDetails">
            <span>Métier : acteur</span> 
            <span>Naissance : {actor.birthDate}</span> 
            <span>Biographie : {actor.biography}</span> 
            {/* <span>Nombre de films :</span>  */}
          </div>
        </div>
        <div className="divActorDetailsInfos2">
          <div className="actorDetailsFilmographie">
            <h2>Filmographie</h2>
              {
                movies.map(movie => (
                  <span>
                  {
                    movie.actors.map(newActor => (
                      //<span>[{newActor.id}]</span>
                      <span key={newActor.id}>
                        { newActor.id == currentActorId
                        ? ( 
                            <span> {movie.title} *</span>                            
                          ) 
                        : (
                            <span></span>
                          )
                        }
                      </span>
                    ))  
                  } 
                  {/* <span>[{movie.actors[0].id}]</span> */}
                  </span>
                ))  
              } 
          </div>
        </div>
      </div>
    );
  }
}

export default ActorDetails;