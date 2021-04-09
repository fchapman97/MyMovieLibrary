import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import './ActorsList.css';

function ActorsList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actors, setActors] = useState([]);

  // Fetching data
  console.log(`"Fetching people from ${process.env.REACT_APP_SERVER_API}...`);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/peoples")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setActors(result);
        },        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log("Fetching people OK !");

  return (
    <div className="actorsContainer">
      <h1 className="titleTouslesActeurs">Tous les acteurs</h1>
      { !isLoaded 
        ? ( <div>Chargement...</div> ) 
        : (
          <div className="actorsListContainer">
            {
              actors.map(actor => (
                <div key={actor._id} className="divOneActor">
                  <img src={actor.picture} className="imgOneActor"/>
                  <div className="infosOneActor">
                    <Link to={`/actorDetails?id=${actor._id}`}>
                      <span className="nomPrenomOneActor">{actor.lastname} {actor.firstname}</span>                                        
                    </Link>
                    <span className="metierOneActor">Metier : acteur</span>
                    <span className="naissanceOneActor">Naissance : {actor.birthDate}</span>
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

export default ActorsList;