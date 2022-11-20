import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Review from "./Review";
import { useParams } from "react-router-dom";
import AddReview from "./AddReview";
import Footer from "./Footer";
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
    // const [movieTitle , setMovieTitle] = useState("");
    const [fetchReviewFlag , setfetchReviewFlag] = useState(false);
    const [userLoggedIn , setUserLoggedIn] = useState(false);
    const fetchReviews = ()=>{
        if(!fetchReviewFlag) return;
        fetch(`http://localhost:8000/reviews/movie/${movieData.title}`)
            .then(response => response.json() )
            .then( data => {
            setMovieReviews(data);
            console.log(data);
            setfetchReviewFlag(false);
            })
        .catch(err => {
            console.log(err);
        });
    }
    useEffect(()=>{
        console.log(movieId);
        fetch(`http://localhost:8000/movies/${movieId}`)
        .then(response => response.json())
        .then(data => {
            setMovieData(data);
            // setMovieTitle(data.title);
            console.log('Setting movie title',data.title);  
        })
        .catch(err => console.log(err));   
    },[]);

    useEffect(()=>{
        fetchReviews();
    },[fetchReviewFlag]);

    useEffect(()=>{
        if (movieData && movieData.title){
            setfetchReviewFlag(true);
        }
    },[movieData]);
    

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
        .then(data => {
            console.log(data)
            setfetchReviewFlag(true);
        })
        .catch(err => console.log(err));
    };
    const handleReviewDelete = (reviewId)=>{
        fetch(`http://localhost:8000/reviews/delete/${reviewId}`,
                { 
                    method:'DELETE',
                    mode:'cors',
                    cache:'no-cache',
                    credentials : 'same-origin',
                    'headers' : {
                        'Content-Type' : 'application/json'
                    },
                    redirect : 'follow',
                    referrerPolicy : 'no-referrer',
                    // body : JSON.stringify({})
                })
        .then(response => {
            setfetchReviewFlag(true);
            return response.json();
        })
        .catch(err => console.log('Error deleting review', err));
    }
    const styles = {
        img : {
            maxWidth : "100%"
        }
    }
    const handleLogin = ()=>{
        setUserLoggedIn(!userLoggedIn);
    };
    return (
            <Container>
            <NavigationBar />
            <img style={styles.img}  src={imagePath+movieData.thumbnail} alt="" />

            
            <div className="container">
                <h1>Movie Name: {movieData.title} </h1>
                <h3>Release Year : { (new Date(movieData.releaseYear)).getFullYear()} </h3>
                <h3>Average Rating : {movieData.averageRating}</h3>
            </div>
            <Button onClick={handleLogin}>{ userLoggedIn ? "Logout" : "Login" }</Button>
            { userLoggedIn ? <AddReview  onSubmit = {addReviewFunction} /> : <div></div>}
            <div className="container">
                {   
                    movieReviews.map( movieReview => 
                    <Review
                        key = {movieReview._id}
                        reviewId = {movieReview._id}
                        username = {movieReview.username}
                        movieTitle = {movieReview.movieTitle}
                        review = {movieReview.review}
                        handleDelete = {handleReviewDelete}
                        userLoggedIn = {userLoggedIn}
                    />)
                }
            </div>
            <Footer/>
        </Container> 
        
    );
}

export default MoviePage;