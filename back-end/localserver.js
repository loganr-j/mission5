require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const propertiesRoutes = require('./routes/properties')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes

app.use('/api/properties', propertiesRoutes)

// For connecting to cloud server replace connect line with
// mongoose.connect(process.env.MONG_URI)
// mongoose.connect('mongodb://mongo:27017/docker-node-mongo')
// &
// console.log('Connected to DB && listening on port',  process.env.PORT)
// process.env.PORT,
// connect to db 
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB && listening on port',  process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })





