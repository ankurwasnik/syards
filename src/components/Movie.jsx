import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import MovieButton from "./MovieButton";
/*
id = {movie._id} 
title={movie.title} 
thumbnail = {movie.thumbnail}
releaseYear = {movie.releaseYear}
averageRating = {movie.averageRating}
*/
const imagePath = "images/"
const styles = {
    card : {
        margin : "8px",
        width : "400px"
    },
    cardImage : {
        maxWidth : "100%",
        minHeight : "300px",
        fill : "content"
    }
}
const Movie = (props)=>{
    let movieDate = new Date(props.releaseYear);
    movieDate = movieDate.getFullYear();
    return (
        <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={imagePath+props.thumbnail} alt={props.title + 'thumbnail' }/>
            <Card.Body>
                <Card.Title className="text-center"> <h4>{props.title} </h4> </Card.Title>
                <Card.Subtitle >{movieDate}</Card.Subtitle>
                <Card.Text> Rating : {props.averageRating}</Card.Text>
                <MovieButton 
                    movieId = {props.id}
                />
            </Card.Body>
        </Card>

    );
}

export default Movie;