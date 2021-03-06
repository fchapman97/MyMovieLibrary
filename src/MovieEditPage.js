import './UpdateMovie.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from "react-router-dom";
import React from 'react';

export default function PeopleEditPage(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [people, setPeople] = useState([]);
    const [peopleModifie, setPeopleModifie] = useState(false);
    let nom = useRef(null);
    let prenom = useRef(null);
    let biographie = useRef(null);
    let dateDeNaissance = useRef(null);    
    let imageUrl = useRef(null);   
    let dateDeDeces = useRef(null);   
    
    let query = new URLSearchParams(useLocation().search);
    let currentPeopleId = query.get("id");    

    console.log("ID TO GET",currentPeopleId);

    const editPeople = useCallback(() => {
        //alert("la")
        console.log("NOM",nom.value);        
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: new URLSearchParams({
                'id' : people._id,
                'lastname' : nom.value,
                'firstname' : prenom.value,
                'biography' : biographie.value,
                'birthDate' : dateDeNaissance.value,
                'birthDate' : dateDeDeces.value,
                'picture' : imageUrl.value
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + "/peoples/edit", requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log("res DB: ", result);
        });
        setPeopleModifie(true);
    },[])

    // Fetching data    
    console.log(`"Fetching people from ${process.env.REACT_APP_SERVER_API}...`);
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_API + "/peoples/:" + currentPeopleId) 
        .then(res => res.json())                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        .then(
            (result) => {
                console.log("Result : ", result);
                setPeople(result[0]);    
                setIsLoaded(true);            
            },        
            (error) => {
                setError(error);
                setIsLoaded(true);
            }
        )
    }, [])
    
    if(peopleModifie){
        return(
            <div>MODIFIE</div>
        );
    } else if(error){
        return(
            <div>
                <h1 className="titleTouslesPersonnages">
                    <div>AUCUN PERSONNAGE DISPONIBLE</div> 
                </h1>
            </div> 
        );
    } else if (!isLoaded){
        return(
            <div>Chargement...</div>
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
                        Date de d??c??s :
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

// requestOptions = {
//     method: 'POST',
//     headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
//     body: new URLSearchParams({
//         'id' : people._id,
//         'lastname' : nom.value,
//         'firstname' : prenom.value,
//         'biography' : biographie.value,
//         'birthDate' : dateDeNaissance.value,
//         'picture' : imageUrl.value
//     })
// },
// fetch(process.env.REACT_APP_SERVER_API + "/peoples/edit", requestOptions)
//     .then(res => res.json())
//     .then(result => {
//         console.log("res DB: ", result);
// })