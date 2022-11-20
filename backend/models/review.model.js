const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ReviewModel = new Schema({
    username : {
        type : String,
        required : true,
    },
    movieTitle : {
        type : String,
        required : true,
        unique : true
    },
    review : {
        type : String,
        required : true, 
        trim : true,
        minLength : 8
    }
    
},{timestamps : true})
const Review = mongoose.model('Review',ReviewModel)
module.exports = Review