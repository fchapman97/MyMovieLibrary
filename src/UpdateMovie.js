import './UpdateMovie.css';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import React from 'react';

function UpdateMovie(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState([]);

    let query = new URLSearchParams(useLocation().search);
    let currentMovieId = query.get("id");    

    console.log("ID TO GET",currentMovieId);

    // Fetching data
    console.log(`"Fetching movies from ${process.env.REACT_APP_SERVER_API}...`);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/movies/:" + currentMovieId) 
        .then(res => res.json())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        .then(
            (result) => {
            console.log("Result : ", result);
            setIsLoaded(true);
            setMovie(result[0]); 
            },        
            (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, []);

    //const makeMoviePost = (movie) =>{
        // fetch(process.env.REACT_APP_SERVER_API + "/movies/edit", {
        //     method: 'POST',
        //     body: JSON.stringify(movie),
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        //     }
        // }).then(response => {
        //     if (response.status >= 200 && response.status < 300) {
        //         console.log(response);
        //         return response;                
        //         //window.location.reload();
        //       } else {
        //        console.log('Somthing happened wrong');
        //       }
        // }).catch(err => err);        
    //};

    if(error){
        return(
            <div>
                <h1 className="titleTouslesFilms">
                    <div>AUCUN FILM DISPONIBLE</div> 
                </h1>
            </div> 
        );
    } else if (!isLoaded){
        return(
            <div>Chargement...</div>
        );
    } else {
        //
        return(            
            <div className="divForm">
                <form className="form">
                    <label>
                        Titre :
                        <input type="text" name="titre" value={movie.title} onChange={(ev) => setMovie({...movie, title: ev.target.value})} />
                    </label>
                    <label>
                        Synopsis :
                        <input type="text" name="synopsis" value={movie.synopsis} onChange={(ev) => setMovie({...movie, synopsis: ev.target.value})} />
                    </label>
                    <label>
                        Date de sortie :
                        <input type="text" name="releaseDate" value={movie.releaseDate} onChange={(ev) => setMovie({...movie, releaseDate: ev.target.value})} />
                    </label>
                    <label>
                        Genre :
                        <input type="text" name="genre" value={movie.genre} onChange={(ev) => setMovie({...movie, genre: ev.target.value})} />
                    </label>
                    <label>
                        Durée :
                        <input type="text" name="duration" value={movie.duration} onChange={(ev) => setMovie({...movie, duration: ev.target.value})} />
                    </label>
                    <label>
                        Lien de l'image :
                        <input type="text" name="posterLink" value={movie.posterLink} onChange={(ev) => setMovie({...movie, posterLink: ev.target.value})} />
                    </label>
                    <label>
                        Lien du trailer :
                        <input type="text" name="trailerLink" value={movie.trailerLink} onChange={(ev) => setMovie({...movie, trailerLink: ev.target.value})} />
                    </label>
                    <label>
                        Producteurs :
                        <input type="text" name="directors" value={movie.directors} onChange={(ev) => setMovie({...movie, directors: ev.target.value})} />
                    </label>
                    <label>
                        Scénaristes :
                        <input type="text" name="writers" value={movie.writers} onChange={(ev) => setMovie({...movie, writers: ev.target.value})} />
                    </label>
                    {/* <div className="inputEnvoyer" onClick={makeMoviePost(movie)} type="button">ENVOYER</div> */}
                    <input className="inputEnvoyer" onClick={makeMoviePost(movie)} type="button" value="Envoyer" />
                    {/* <button onClick={makeMoviePost(movie)}>ENVOYER</button> */}
                </form>
            </div>
        );
    }    
}

function makeMoviePost(movie){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: new URLSearchParams({
            'id' : movie._id,
            'title' : movie.title,
            'synopsis' : movie.synopsis
        })
    }
    fetch(process.env.REACT_APP_SERVER_API + "/movies/edit", requestOptions)
        .then(res => res.json())
        .then(result => {
            console.log("res DB: ", result);
        });
}

export default UpdateMovie;