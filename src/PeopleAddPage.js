import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './PeopleAddPage.css';

function PeopleAddPage() {
    const [peopleAjoute, setPeopleAjoute] = useState(false);
    let nom = useRef(null);
    let prenom = useRef(null);
    let biographie = useRef(null);
    let dateDeNaissance = useRef(null);    
    let dateDeDeces = useRef(null);   
    let imageUrl = useRef(null);   

    function addPeople(){
        console.log("ADD PEOPLE ",prenom.value);     
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: new URLSearchParams({
                'lastname' : nom.value,
                'firstname' : prenom.value,
                'biography' : biographie.value,
                'birthDate' : dateDeNaissance.value,
                'deathDate' : dateDeDeces.value,
                'picture' : imageUrl.value
            })
        }
        fetch(process.env.REACT_APP_SERVER_API + "/peoples/edit", requestOptions)
            .then(res => res.json())
            .then(result => {
                console.log("res DB: ", result);
        });
        setPeopleAjoute(true);
    }
    
    if(peopleAjoute){
        return(
            <div>AJOUTE</div>
        );
    } else {
        return(
            <div className="divForm">
                <form className="form">
                    <label>
                        Nom :
                        <input 
                            type="text"
                            name="firstname"
                            ref={newval => nom = newval}
                        />
                    </label>
                    <label>
                        Prenom :
                        <input 
                            type="text" 
                            name="lastname"
                            ref={newval => prenom = newval}
                        />
                    </label>
                    <label>
                        Biographie :
                        <input 
                            type="text" 
                            name="biography" 
                            ref={newval => biographie = newval}
                        />
                    </label>
                    <label>
                        Date de naissance :
                        <input 
                            type="number" 
                            name="birthDate"
                            ref={newval => dateDeNaissance = newval} 
                        />
                    </label>
                    <label>
                        Date de décès :
                        <input 
                            type="number" 
                            name="deathDate" 
                            ref={newval => dateDeDeces = newval}
                        />
                    </label>
                    <label>
                        Image URL :
                        <input 
                            type="text" 
                            name="picture" 
                            ref={newval => imageUrl = newval}
                        />
                    </label>   
                    <button type onClick={addPeople}>ENVOYER</button>
                </form>
            </div>
        );
    }
};

export default PeopleAddPage;