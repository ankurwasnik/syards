const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const ReviewModel = require('../models/review.model');
const { unsubscribe } = require('./movies');

//get reviews of movies using movieID 
router.route('/movie/:id').get((req,res)=>{
    const id = req.params.id
    ReviewModel.find({movieId:id})
    .then(reviews => {
        return res.json(reviews);
    })
    .catch(err => {
        console.log(`Error getting reviews for movie ${id}`);
    })
});
//6379126ac94c47731845e2de
router.route('/add').post((req,res)=>{
    const movieId = mongoose.Types.ObjectId( req.body.movieId )
    const username = req.body.username
    const review = req.body.review
    const newReview = new ReviewModel({username, movieId, review});
    //let userReviewedMovie = false;
    ReviewModel.find({movieId:movieId, username: username})
    .then(result => {
        //userReviewedMovie = true;
        console.log("Movie already reviewed ", result);
        if(result === null || result.length === 0) {
            newReview.save()
            .then(result => {
                console.log("Review added ")
                console.log(result);
                res.json(result);
                return;
            })
            .catch(err => {
                console.log(err);
                res.json(err);
            });
        }
        else {
            res.send('Movie already reviwed');
        }
    })
    .catch(err => {
        console.log(err)
        
    });

    // Movie.updateOne(
    //     { _id: movieId }, 
    //     { $push: { reviews: recordToInsert } },
    //     console.log('Review added ')
    // );

});

router.route('/delete').delete((req,res)=>{
    const id = req.body.movieId
    const user = req.body.username
    ReviewModel.findOneAndDelete({ movieId :id, username : user},(err,review)=>{
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

module.exports = router