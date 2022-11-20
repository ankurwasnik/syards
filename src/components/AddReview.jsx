import React, { useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
const AddReview = (props)=>{
    const [reviewText, setReviewText]  = useState("");
    function handleReviewChange(event){
        const value = event.target.value;
        setReviewText(value);
    }
    function handleReviewSubmit(event){
        props.onSubmit(reviewText);
        setReviewText("");
        event.preventDefault();
    }
    return (
        <Form>
            <FormGroup>
                <Form.Label>Your review</Form.Label>
                <Form.Control type="text" placeholder="Write your review here" value={reviewText} 
                onChange={handleReviewChange}
                />
            </FormGroup>
            <Button variant="primary" onClick={handleReviewSubmit} >Add Review</Button>
        </Form>
    )
}

export default AddReview;