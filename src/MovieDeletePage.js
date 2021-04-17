// import './UpdateMovie.css';
import { useLocation } from "react-router-dom";
import React from 'react';

function MovieDeletePage(props) {
    let query = new URLSearchParams(useLocation().search);
    let currentMovieId = query.get("id");    

    console.log("ID TO GET",currentMovieId);
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: new URLSearchParams({
            'id' : currentMovieId,
        })
    }
    fetch(process.env.REACT_APP_SERVER_API + "/movies/delete", requestOptions)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("DeleteResult : ", result);
            },        
            (error) => {
                console.log("Error : ", error);
            }
        );

    return(
        <div>Movie supprimé</div>
    );
};

export default MovieDeletePage;