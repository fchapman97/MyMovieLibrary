import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";

function DirectorsList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [directors, setDirectors] = useState([]);

  // Fetching data
  console.log(`"Fetching director from ${process.env.REACT_APP_SERVER_API}...`);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/movies")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setDirectors(result);
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
      <h3>Liste des producteurs</h3>
      { !isLoaded 
        ? ( <div>Chargement...</div> ) 
        : (
          <div id="directorsContainer">
            {
              directors.map(director => (
                <p key={director._id}>
                  <Link to={`/directorDetails?id=${director._id}`}>
                    <span>{director.acotrs} {director.title}</span>
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

export default DirectorsList;