import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import './DirectorDetails.css';
import moment from 'moment';

function DirectorDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [director, setDirector] = useState([]);
  const [movies, setMovies] = useState([]);
  let currentDirectorId = query.get("id");

  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Director ID : ${currentDirectorId}`);
    console.log(`Fetching director details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/peoples?_id=${currentDirectorId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setDirector(result[0]);
          console.log("Director : ", director);
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
      console.log("Fetching director details OK !");
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    console.log("DIRECTOR OKK : ", director);
    return (
      <div>
        <h1 className="nomPrenomDirectorDetails">{director.firstname} {director.lastname}</h1>
        <div className="divDirectorDetailsInfos1">
          <img src={director.picture} className="imgDirectorDetails"/>
          <div className="infosDirectorDetails">
            <span>Métier : producteur</span> 
            <span>Naissance : 
              {moment(director.birthDate, 'YYYYMMDD').format('MMM Do YY')}  
            </span> 
            <span>Biographie : {director.biography}</span> 
            {/* <span>Nombre de films :</span>  */}
          </div>
        </div>
        <div className="divDirectorDetailsInfos2">
          <div className="directorDetailsRealisations">
            <h2>Réalisations</h2>
            {/* <span>Film 1</span>
            <span>Film 2</span> */}
              {
                movies.map(movie => (
                  <span>
                  {
                    movie.directors.map(newDirector => (
                      // <span>[{newDirector}]</span>
                      <span>
                        { newDirector == currentDirectorId
                        ? ( 
                            <span>{movie.title} * </span>                            
                          ) 
                        : (
                            <span></span>
                          )
                        }
                      </span>
                    ))  
                  } 
                  {/* <span>[{movie.director[0].id}]</span> */}
                  </span>
                ))  
              } 
          </div>
        </div>
      </div>
    );
  }
}

export default DirectorDetails;