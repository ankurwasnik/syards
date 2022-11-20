import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const MovieButton = (props) =>{
    const navigate = useNavigate();
    return (
        
        <Button variant="primary">Show Reviews</Button>
    )
};

export default MovieButton;