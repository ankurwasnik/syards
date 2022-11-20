const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const ReviewModel = require('../models/review.model');

//get reviews of movies using movieID 
router.route('/movie/:title').get((req,res)=>{
    const title = req.params.title
    ReviewModel.find({movieTitle:title})
    .then(reviews => {
        return res.json(reviews);
    })
    .catch(err => {
        console.log(`Error getting reviews for movie ${title}`);
    })
});


//6379126ac94c47731845e2de
router.route('/add').post((req,res)=>{
    const movieTitle = req.body.movieTitle
    const username = req.body.username
    const review = req.body.review
    const newReview  = new ReviewModel({username : username, movieTitle : movieTitle, review : review});
    newReview.save()
    .then(result => {
        console.log('Movie review added',result);
        res.json(result);
    })
    .catch(err => {
        console.log('Error adding review', err);
        res.json('Movie already reviewed')
    });
});

router.route('/delete').delete((req,res)=>{
    const movie = req.body.movieTitle
    // const user = req.body.username
    ReviewModel.findOneAndDelete({ movieTitle :movie},(err,review)=>{
        if(err) {
            console.log('Error deleting review');
            res.json(err);
        }
        if(review === null ) {
            console.log('no review found');
            res.sendStatus = 404
            res.send('No review found');
        }
        else 
        {
            console.log("Review deleted", review);
            res.sendStatus = 200
            res.send('Review deleted');
        }

    });
    
});

router.route('/delete/:id').delete((req,res)=>{
    const id = req.params.id;
    ReviewModel.findByIdAndDelete(id,(err,result)=>{
        if(err) console.log('Error deleting review', err);
        else {
            console.log('Deleted review', result);
            res.sendStatus = 200;
            res.json('Review deleted');
        }
    })
})

module.exports = router