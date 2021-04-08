import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
//import './ActorDetails.css';

function ActorDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actor, setActor] = useState([]);
  let actorId = query.get("id");

  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Actor ID : ${actorId}`);
    console.log(`Fetching actor details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/peoples?_id=${actorId}`)
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
      console.log("Fetching actor details OK !");
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <div>
        <h3>Détail de l'acteur</h3>
        <div>
          <p>ID : {actor._id}</p>
          <p>Nom : {actor.lastname}</p>
          <p>Prénom : {actor.firstname}</p>
        </div>
      </div>
    );
  }
}

export default ActorDetails;