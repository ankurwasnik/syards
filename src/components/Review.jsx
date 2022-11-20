import React from "react";
import { Container } from "react-bootstrap";
/*
props
    - reviewId
    - username
    - movieId
    - review
*/
const Review = (props)=>{
    return (
        <Container>
            <p hidden>{props.reviewId}</p>
            <p hidden>{props.movieId}</p>
            <h3>{props.username}</h3>
            <p>{props.review}</p>
        </Container>
    );
}

export default Review;