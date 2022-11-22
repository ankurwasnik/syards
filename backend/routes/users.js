const router = require('express').Router()
const bodyParser = require('body-parser');
const Movie = require('../models/movie.model');
let User = require('../models/user.model')

/* 
Endpoint : /user/
Req type : GET
*/
router.route('/').get((req,res)=>{
    const username = req.body.username
    User
    .find({username:username})
    .then((result)=>{
        if(result) return res.json(result);
        else return res.json([]);
    })
    .catch(err=>{
        console.log('Error : ', err.message);
    })
});
// /users/login
router.route('/login').post(async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userToFind = {
        username:username,
        password:password
    }
    console.log(req.body)
    // console.log(userToFind.username.length,userToFind.password.length);

    let updatedUser = await User.findOneAndUpdate(userToFind,{isloggedIn:true},{new:true});
    res.sendStatus = 200;
    console.log('Updated User' , updatedUser);
    res.json(updatedUser);
});
router.route('/logout').post(async (req,res)=>{
    const username = req.body.username;
    // const password = req.body.password;
    const userToFind = {
        username:username
        // password:password
    }
    let updatedUser = await User.findOneAndUpdate(userToFind,{isloggedIn:false},{new:true});
    res.sendStatus = 200;
    console.log(updatedUser);
    res.json(updatedUser);
    // res.json(updatedUser);    User.findOneAndUpdate(userToFind,{isloggedIn:false},(err,user)=>{
    //     if(err) console.log('Error logging user',err);
    //     if(!user) res.send('User not found')
    //     else {
    //         console.log('user logged out',user.isloggedIn);
    //         res.json(user);
    //     }
    // });
});

/*
Endpoint : /users/:id
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
    .then((user)=>{
        console.log('User added successfully');
        res.status = 200
        res.json(user)
    })
    .catch(err => {
        console.log('Error adding new user');
        res.json(err);
    });

});

module.exports = router