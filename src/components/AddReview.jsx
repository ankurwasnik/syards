import React, { useState , useContext} from "react";
import { Button, FormGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import {userLoggedInContext} from '../App'

const AddReview = (props)=>{
    const [reviewText, setReviewText]  = useState("");
    const [isUserLoggedIn, setIsUserLoggedIn] = useContext(userLoggedInContext);

    function handleReviewChange(event){
        const value = event.target.value;
        setReviewText(value);
    }
    function handleReviewSubmit(event){
        if (!isUserLoggedIn) {
            alert('Pleas login to review movie');
            setReviewText("");
            return;
        }
        props.onSubmit(reviewText);
        setReviewText("");
        event.preventDefault();
    }
    return (
        <div className="container mt-4 mb-4">
        <Form>
            <FormGroup>
                <Form.Control type="text" placeholder="Write your review here" value={reviewText} 
                onChange={handleReviewChange}
                />
            </FormGroup>
            <div className="mt-2">
            <Button variant="primary" onClick={handleReviewSubmit} >Add Review</Button>
            </div>
        </Form>
        </div>
    )
}

export default AddReview;