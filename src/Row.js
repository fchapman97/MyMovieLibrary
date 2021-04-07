import React,{useEffect, useState} from 'react';

function Row(props){
    const [movies,setMovies] = useState([]);

    useEffect(() => {

    }, []);


    const listMovies = props.listMovies;

    return (
        <div className="row">
          <h2>{props.title}</h2>
          <div className="row_posters">
             <p>{props.listMovies}</p>
          </div>
        </div>
    )
}


export default Row