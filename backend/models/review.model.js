const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ReviewModel = new Schema({
    username : {
        type : String,
        required : true,
    },
    movieId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
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