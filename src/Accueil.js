import React from 'react';
import './Accueil.css';

export default function Accueil() {
    return (
        <div className="accueilContainer">
            <ElementsDeTri />
            <ListeDeFilms />
        </div>
    );
}

function ElementsDeTri() {
    return (
        <div className="divContainerDeTri">
            <div className="divDeTri">
                <span className="typeTri">Par genre :</span>
            </div>
            <div className="divDeTri">
                <span className="typeTri">Par date :</span>
            </div>  
            <div className="divDeTri">
                <span className="typeTri">Par durée :</span>
            </div>              
        </div>
    );
}

function ListeDeFilms() {
    return (
        <div className="divContainerFilms">
            <div className="divDeFilm">
                FILM#1
            </div>
            <div className="divDeFilm">
                FILM#2
            </div>  
            <div className="divDeFilm">
                FILM#3
            </div>          
        </div>
    );
}

