import {React, useContext} from "react";
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
            <p>{props.username} on { (new Date(props.date).getDate())}: {props.review}</p>
            <p></p>
            <Button hidden={!props.userLoggedIn} onClick={()=>{props.handleDelete(props.reviewId)}} >Delete</Button>
        </Container>
    );
}

export default Review;