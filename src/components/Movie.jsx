import React from "react";
import { Button, Container, Image } from "react-bootstrap";
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
        margin : "1rem",
    },
    container : {
        position: "relative",
        width: "50%",
        maxWidth: "300px"
      },
      image : {
        width: "400px",
        height: "300px",
        objectFit:"cover"
      }
}
const Movie = (props)=>{
    let movieDate = new Date(props.releaseYear);
    movieDate = movieDate.getFullYear();
    return (
        // <Card style={styles.card}>
        //     <>
        //         <Card.Img  style={styles.cardImage} variant="top" src={imagePath+props.thumbnail} alt={props.title + 'thumbnail' }/>
        //     </>
        //     <Card.Body>
        //         <Card.Title className="text-center"> <h4>{props.title} </h4> </Card.Title>
        //         <Card.Subtitle >{movieDate}</Card.Subtitle>
        //         <Card.Text> Rating : {props.averageRating}</Card.Text>
        //         <MovieButton 
        //             movieId = {props.id}
        //         />
        //     </Card.Body>
        // </Card>
            <div  style={{maxWidth :"400px"}} className="movieCard m-2">
                    <Image className="container" style={styles.image} src={imagePath+props.thumbnail} />                <div className="d-flex flex-row"> 
                    <div className="container">
                            <div className="">
                                <h4>{props.title}</h4>
                            </div>
        
                            <p> Released Year : {movieDate} <br/> Average Rating : {props.averageRating}/10 </p>                
                    </div>
                    <div className="p-2">
                    <MovieButton movieId = {props.id}/>
                    </div>
                </div>
                
            </div>

    );
}

export default Movie;