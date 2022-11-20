const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const UserModel = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minLength : 4
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minLength : 8
    },
    isloggedIn : { type : Boolean }
},{timestamps : true})
const User = mongoose.model('User',UserModel)
module.exports = User