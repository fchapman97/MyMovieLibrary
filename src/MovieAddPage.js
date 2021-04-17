import React from 'react';
import { useState, useRef } from 'react';
// import './MovieAddPage.css';

function MovieAddPage() {
    const [movieAjoute, setMovieAjoute] = useState(false);
    let title = useRef(null);
    let synopsis = useRef(null);
    let releaseDate = useRef(null);
    let duration = useRef(null);    
    let posterLink = useRef(null);   
    let trailerLink = useRef(null);   
    // let genre = useRef(null);  
    // let directors = useRef(null);  
    // let writers = useRef(null);  
    // let actors = useRef(null);  
        

    function addMovie(){
        console.log("ADD MOVIE ",title.value);     
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: new URLSearchParams({
                'title' : title.value,
                'synopsis' : synopsis.value,
                'releaseDate' : releaseDate.value,
                'duration' : duration.value,
                'posterLink' : posterLink.value,
                'trailerLink' : trailerLink.value
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + "/movies/edit", requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log("res DB: ", result);
        });
         setMovieAjoute(true);
    }
    
    if(movieAjoute){
        return(
            <div>AJOUTE</div>
        );
    } else {
        return(
            <div className="divForm">
                <form className="form">
                    <label>
                        Titre :
                        <input 
                            type="text"
                            name="title"
                            ref={newval => title = newval}
                        />
                    </label>
                    <label>
                        Synopsis :
                        <input 
                            type="text" 
                            name="synopsis"
                            ref={newval => synopsis = newval}
                        />
                    </label>
                    <label>
                        Biographie :
                        <input 
                            type="text" 
                            name="releaseDate" 
                            ref={newval => releaseDate = newval}
                        />
                    </label>
                    <label>    
                        Date de naissance :
                        <input 
                            type="number" 
                            name="duration"
                            ref={newval => duration = newval} 
                        />
                    </label>
                    <label>
                        Date de décès :
                        <input 
                            type="number" 
                            name="posterLink" 
                            ref={newval => posterLink = newval}
                        />
                    </label>
                    <label>
                        Image URL :
                        <input 
                            type="text" 
                            name="trailerLink" 
                            ref={newval => trailerLink = newval}
                        />
                    </label>   
                    <button type onClick={addMovie}>ENVOYER</button>
                </form>
            </div>
        );
    }
};

export default MovieAddPage;