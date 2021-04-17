import './UpdateMovie.css';
import { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import React from 'react';

function PeopleDeletePage(props) {
    let query = new URLSearchParams(useLocation().search);
    let currentPeopleId = query.get("id");    

    console.log("ID TO GET",currentPeopleId);
    
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: new URLSearchParams({
            'id' : currentPeopleId,
        })
    }
    fetch(process.env.REACT_APP_SERVER_API + "/peoples/delete", requestOptions)
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
        <div>Acteur supprimé</div>
    );
};

export default PeopleDeletePage;