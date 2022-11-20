const router = require('express').Router()
const bodyParser = require('body-parser')
let Movie = require('../models/movie.model')

/* 
Endpoint : /movies/
Req type : GET
*/
router.route('/').get((req,res)=>{
    Movie
    .find()
    .then((result)=>{
        return res.json(result);
    })
    .catch(err=>{
        console.log('Error getting movies ', err.message);
    })
});

//add movie
router.route('/add').post((req,res)=>{
    const thumbnail = req.body.thumbnail
    const title = req.body.title
    const releaseYear = Date.parse(req.body.releaseYear)
    const averageRating = parseInt(req.body.averageRating)
    const newMovie = new Movie({thumbnail,title,releaseYear,averageRating});
    newMovie.save()
    .then(result => {
        console.log('Added movie successfully');
        return res.json(result);
    })
    .catch(err => {
        console.log('Error adding movie')
        return
    })
    
});

/*
Endpoint : /movies/:id
Req type : GET
*/
router.route('/:id').get((req,res)=>{
    const movieId = req.params.id;
    Movie
    .findById({_id : movieId},(err,movie)=>{
        if(err) console.log('Error finding movie');
        return res.json(movie)
    });
})
// /* 
// Endpoint : /movies/reviews
// Req type : POST
// */
// router.route('/reviews').get((req,res)=>{
//     let movieTitle = req.body.title
//     Movie.findById({'title': movieTitle}, (err,movie)=>{

//         if(err) console.log('Error getting reviews');
        
//         return res.json(movie.reviews);
//     });
         
// });


module.exports = router