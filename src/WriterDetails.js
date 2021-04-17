import React from 'react';
import { useState, useEffect } from 'react';
import {
  useLocation
} from "react-router-dom";
import './WriterDetails.css';
import moment from 'moment';

function WriterDetails(props) {
  let query = new URLSearchParams(useLocation().search);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [writer, setWriter] = useState([]);
  const [movies, setMovies] = useState([]);
  let currentWriterId = query.get("id");

  // Fetching data
  useEffect(() => {
    console.log('Query : ', query);
    console.log(`Writer ID : ${currentWriterId}`);
    console.log(`Fetching writer details from ${process.env.REACT_APP_SERVER_API}...`);

    fetch(`${process.env.REACT_APP_SERVER_API}/peoples/:${currentWriterId}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("Result : ", result);
          setIsLoaded(true);
          setWriter(result[0]);
          console.log("Writer : ", writer);
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
      console.log("Fetching writer details OK !");
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    console.log("WRITER OKK : ", writer);
    return (
      <div>
        <h1 className="nomPrenomWriterDetails">{writer.firstname} {writer.lastname}</h1>
        <div className="divWriterDetailsInfos1">
          <img src={writer.picture} className="imgDWriterDetails"/>
          <div className="infosWriterDetails">
            <span>Métier : scénariste</span> 
            <span>Naissance : 
              {moment(writer.birthDate, 'YYYYMMDD').format('MMM Do YY')}  
            </span> 
            <span>Biographie : {writer.biography}</span> 
            {/* <span>Nombre de films :</span>  */}
          </div>
        </div>
        <div className="divDWriterDetailsInfos2">
          <div className="writerDetailsRealisations">
            <h2>Oeuvres</h2>
            {/* <span>Film 1</span>
            <span>Film 2</span> */}
              {
                movies && movies.map(movie => (
                  <span>
                  {
                    movie.writers && movie.writers.map(newWriter => (
                      // <span>[{newWriter}]</span>
                      <span>
                        { newWriter == currentWriterId
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
                  {/* <span>[{movie.writer[0].id}]</span> */}
                  </span>
                ))  
              } 
          </div>
        </div>
      </div>
    );
  }
}

export default WriterDetails;