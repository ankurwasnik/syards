const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
    thumbnail : {
        type : String,
        required : true,
        trim : true,
    },
    title : {
        type : String,
        required : true,
        trim : true,
        minLength : 8
    },
    releaseYear : {
        type : Date,
        required : true
    },
    averageRating : {
        type : Number,
        required : true
    },
    // reviews : [{username : String , review : String}]
},{timestamps : true})

const Movie = mongoose.model('Movie',MovieSchema)
module.exports = Movie