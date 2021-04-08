import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

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
      <h3>Liste des acteurs</h3>
      { !isLoaded 
        ? ( <div>Chargement...</div> ) 
        : (
          <div>
            {
              actors.map(actor => (
                <p key={actor._id}>
                  <Link to={`/actorDetails?id=${actor._id}`}>
                    <span>{actor._id} {actor.lastname} {actor.firstname}</span>
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

export default ActorsList;