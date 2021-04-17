import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import './WritersList.css';
import moment from 'moment';

function WritersList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [peoples, setPeoples] = useState([]);
  const [movies, setMovies] = useState([]);
  
  // Fetching data
  console.log(`"Fetching movies and people from ${process.env.REACT_APP_SERVER_API}...`);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/peoples")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result people : ", result);
          setIsLoaded(true);
          setPeoples(result);
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
        setIsLoaded(true);
        setMovies(result);
      },        
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, [])

  return (
    <div>
      { error 
        ? ( 
            <div>
              <h1 className="titleTouslesFilms">
                  <div>AUCUN SCENARISTE DISPONIBLE</div> 
              </h1>
            </div> )
        : ( 
            <div>
              <h1 className="titleTouslesFilms">
                <div>TOUS LES SCENARISTES</div> 
              </h1>
              { !isLoaded 
                ? ( <div>Chargement...</div> ) 
                : (       
                  <div>   
                    <Link to={`/addPeople`} className="linkAjouterOnePeople">  
                      <button className="butonAjouterProducteur">Ajouter un scénariste</button>
                    </Link> 
                    <div id="writersContainer">
                      {
                        movies && movies.map(movie => (
                          <p key={movie._id}>
                            {
                              movie.writers && movie.writers.map(writer => (
                                <div key={writer}>
                                {
                                  peoples && peoples.map(people => (
                                    <p key={people._id}>
                                      { writer ===  people._id
                                      ? ( 
                                        //<span>{people._id} {people.firstname} {people.lastname}</span>                              
                                        ///////////////////////

                                        <div key={people._id} className="divOneWriter">
                                          <img src={people.picture} className="imgOneWriter"/>
                                          <div className="infosOneWriter">
                                            <Link to={`/writerDetails?id=${people._id}`}>
                                              <span className="nomPrenomOneWriter">{people.lastname} {people.firstname}</span>                                        
                                            </Link>
                                            <span className="metierOneWriter">Metier : scénariste</span>
                                            <span className="naissanceOneWriter">Naissance :
                                              {moment(people.birthDate, 'YYYYMMDD').format('MMM Do YY')}    
                                            </span>
                                          </div>
                                          <Link to={`/updatePeople?id=${people._id}`} className="linkModifierOnePeople">  
                                            <button className="boutonModifierOnePeople">Modifier</button>
                                          </Link>
                                          <Link to={`/deletePeople?id=${people._id}`} className="linkSupprimerOnePeople">  
                                            <button className="boutonSupprimerOnePeople">Supprimer</button>
                                          </Link>
                                        </div>

                                        ///////////////////////
                                        ) 
                                      : (
                                          <div></div>
                                        )
                                      }
                                    </p>
                                  ))
                                }  
                                </div>
                              ))
                            }                   
                          </p>
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

      


export default WritersList;