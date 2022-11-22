import React from "react";
import Review from "./Review";
const ListOfReviews = (props)=>{
    return (
            <>
                {
                    props.reviews.map( movieReview => 
                    <Review
                        key = {movieReview._id}
                        reviewId = {movieReview._id}
                        username = {movieReview.username}
                        movieTitle = {movieReview.movieTitle}
                        review = {movieReview.review}
                        handleDelete = {props.handleReviewDelete}
                        userLoggedIn = {props.userLoggedIn}
                        date = {props.updatedAt}
                    />)
                }
            </>
    )
}

export default ListOfReviews;