import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Review from "./Review";
import { useParams } from "react-router-dom";
import AddReview from "./AddReview";
/*
props :
    id
    title
    thumbnail
    releasedYear
    averageRating
*/

const MoviePage = () => {
    const imagePath = "/images/";
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);
    const [movieData , setMovieData] = useState({});
    const [movieTitle , setMovieTitle] = useState("");
    useEffect(()=>{
        console.log(movieId);
        fetch(`http://localhost:8000/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            setMovieData(data);
            setMovieTitle(data.title);
            console.log('Setting movie title',movieTitle);
        })
        .catch(err => console.log(err));   
        
        fetch(`http://localhost:8000/reviews/movie/${movieTitle}`)
        .then(response => response.json() )
        .then( data => {
            setMovieReviews(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

    },[]);


    // let movieDate = new Date(movieData.releaseYear);
    // movieDate = movieDate.getFullYear();

    const addReviewFunction = (review)=>{
        const bodyData = {
            review : review,
            username : 'ankur',
            movieTitle : movieData.title
        }
        fetch('http://localhost:8000/reviews/add',
                { 
                    method:'POST',
                    mode:'cors',
                    cache:'no-cache',
                    credentials : 'same-origin',
                    'headers' : {
                        'Content-Type' : 'application/json'
                    },
                    redirect : 'follow',
                    referrerPolicy : 'no-referrer',
                    body : JSON.stringify(bodyData)
                })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };

    const styles = {
        img : {
            maxWidth : "100%"
        }
    }
    return (
            <Container>
            <NavigationBar />
            <img style={styles.img}  src={imagePath+movieData.thumbnail} alt="" />

            
            <div className="container">
                <h1>Movie Name: {movieData.title} </h1>
                <h3>Release Year : { (new Date(movieData.releaseYear)).getFullYear()} </h3>
                <h3>Average Rating : {movieData.averageRating}</h3>
            </div>
            <AddReview onSubmit = {addReviewFunction} />
            <div className="container">
                {   
                    movieReviews.map( movieReview => 
                    <Review
                        key = {movieReview._id}
                        reviewId = {movieReview._id}
                        username = {movieReview.username}
                        movieTitle = {movieReview.movieTitle}
                        review = {movieReview.review}
                    />)
                }
            </div>
        </Container> 
        
    );
}

export default MoviePage;