import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Review from "./Review";
/*
props :
    id
    title
    thumbnail
    releasedYear
    averageRating
*/

const MoviePage = (props) => {
    const imagePath = "/images/";
    let movieDate = new Date(props.releaseYear);
    movieDate = movieDate.getFullYear();
    const movieId = props.id;
    const reviewsEndpoint = '/reviews/movie/'+'63791e05f393ba726becf519'
    const [movieReviews, setMovieReviews] = useState([]);
    useEffect(()=>{
        fetch(reviewsEndpoint)
        .then(reviewsResponse => {
            return reviewsResponse.json();
        })
        .then(data => {
            //setting movie reviews
            setMovieReviews(data);
        })
        .catch(err => console.log("Error getting reviews"))
    },[]);

    const buildEndpoint = (movieId)=>{
        return (reviewsEndpoint+movieId).toString();
    }

    return (
        <Container>
            <NavigationBar />
            <img src={imagePath+props.thumbnail} alt="" />
            <div className="container movie-info">
                
                <h1>Movie Name</h1>
                <h3>Release Year : {movieDate}</h3>
                <h3>Average Rating : {props.averageRating}</h3>
            </div>
            <div className="container movie-reviews">
                {
                    movieReviews.map( movieReview => 
                    <Review
                        reviewId = {movieReview._id}
                        username = {movieReview.username}
                        movieId = {movieReview.movieId}
                        review = {movieReview.review}
                    />)
                }
            </div>
        </Container>
    );
}

export default MoviePage;