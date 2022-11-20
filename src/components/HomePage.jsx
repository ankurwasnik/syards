import React, { useEffect, useState } from "react";
import Footer from "./Footer"
import Movie from "./Movie";
import NavigationBar from "./NavigationBar";

const HomePage = (props) => {
    const [movies , setMovies] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/movies')
        .then(response => response.json() )
        .then( data => {
            setMovies(data);
        })
        .catch(err => {
            console.log(err);
        });
            
    },[]);
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="d-flex flex-wrap p-2 justify-content-start align-item-center">
                        { movies.length > 0 && movies.map( movie => 
                            <Movie 
                                key = {movie._id} 
                                id = {movie._id} 
                                title={movie.title} 
                                thumbnail = {movie.thumbnail}
                                releaseYear = {movie.releaseYear}
                                averageRating = {movie.averageRating}
                                />
                            )
                         }
                </div>
            
            </div>
            
            <Footer />
        </div>
       
    )
}
export default HomePage;