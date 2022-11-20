import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
//movieId
const MovieButton = (props) =>{
    const navigate = useNavigate();
    const [movieId , setMovieId] = useState('');
    useEffect(()=>{
        //set movie id from props 
        setMovieId(props.movieId);
    },[]);
    function handleOnClick(){
        console.log(`button clicked for movieId = ${movieId}`);
        navigate(`/movie/${movieId}`);
    };
    return (
        
        <Button variant="primary" value={movieId} onClick = {handleOnClick} > Show Reviews </Button>
    )
};

export default MovieButton;