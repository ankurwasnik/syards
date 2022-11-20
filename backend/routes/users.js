const router = require('express').Router()
const bodyParser = require('body-parser');
const Movie = require('../models/movie.model');
let User = require('../models/user.model')

/* 
Endpoint : /user/
Req type : GET
*/
router.route('/').get((req,res)=>{
    User
    .find()
    .then((result)=>{
        return res.json(result);
    })
    .catch(err=>{
        console.log('Error : ', err.message);
        return res.status = 500
    })
});

/*
Endpoint : /user/:id
Req type : GET
*/
router.route('/:id').get((req,res)=>{
    const id = req.params.id
    User.findOne({_id : id }, 'username isloggedIn', (err,user)=>{
        if(err) console.log('Error finding user');
        return res.json(user);
    });
});

/*
Endpoint : /user/add
Req type : POST
*/
router.route('/add').post((req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    let isloggedIn = false
    const newUser = new User({username,password,isloggedIn});
    newUser
    .save()
    .then(()=>{
        console.log('User added successfully');
        res.status = 200
        return
    })
    .catch(err => {
        console.log('Error adding new user');
        return
    });

});

module.exports = router