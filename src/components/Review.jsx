import React from "react";
import { Button, Container } from "react-bootstrap";
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
            <Button hidden={!props.userLoggedIn} onClick={()=>{props.handleDelete(props.reviewId)}} >Delete</Button>
        </Container>
    );
}

export default Review;