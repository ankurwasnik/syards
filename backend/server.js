const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000
app.use(cors())
app.use(express.json())

const uri = process.env.ALTAS_URL 
mongoose.connect(uri);
const connection = mongoose.connection
connection.once('open',()=>{
    console.log('Database connected!');
});

// Movies and User routers
const moviesRouter = require('./routes/movies')
const userRouter = require('./routes/users')
const reviewRouter = require('./routes/reviews')
app.get('/',(req,res)=>{
    res.send('Deployed successfully on heroku');
})
app.use('/movies', moviesRouter)
app.use('/users', userRouter)
app.use('/reviews', reviewRouter)

app.listen(port,()=>{
    console.log(`Server started at port ${port} `);
});
