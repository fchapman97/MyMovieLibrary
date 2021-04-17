import React from 'react';
import { useState, useEffect } from 'react';
import {
  Link
} from "react-router-dom";
import './ActorsList.css';
import moment from 'moment';

function ActorsList(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [actors, setActors] = useState([]);

  // Fetching data
  console.log(`"Fetching peoples from ${process.env.REACT_APP_SERVER_API}...`);
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_API + "/peoples")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result PEOPLES : ", result);
          setIsLoaded(true);
          setActors(result);
        },        
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  console.log("Fetching peoples OK !");

  return (
    <div className="actorsContainer">
      { error 
        ? ( 
            <div>
              <h1 className="titleTouslesFilms">
                  <div>AUCUN ACTEUR DISPONIBLE</div> 
                  {/* <div>{error.status}</div> */}
              </h1>
            </div> )
        : ( 
          <div>
            <h1 className="titleTouslesActeurs">
              <div>Tous les acteurs</div>
            </h1>
            { !isLoaded 
              ? ( <div>Chargement...</div> ) 
              : (
                <div>
                  <Link to={`/addPeople`} className="linkAjouterOnePeople">  
                    <button className="butonAjouterActeur">Ajouter un acteur</button>
                  </Link>                  
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
                            <span className="naissanceOneActor">Naissance : 
                                {moment(actor.birthDate, 'YYYYMMDD').format('MMM Do YY')}
                            </span>
                          </div>
                          <Link to={`/updatePeople?id=${actor._id}`} className="linkModifierOnePeople">  
                            <button className="boutonModifierOnePeople">Modifier</button>
                          </Link>
                          <Link to={`/deletePeople?id=${actor._id}`} className="linkSupprimerOnePeople">  
                            <button className="boutonSupprimerOnePeople">Supprimer</button>
                          </Link>
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

export default ActorsList;