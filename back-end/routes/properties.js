const express = require('express')
const Property = require('../models/propertyModel')
const router = express.Router()
const {createProperty, getProperties} = require('../controllers/propertyControls' )



//dummy start
router.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

//get a single property
router.get('/:beds', getProperties)



//post a single property
router.post('/', createProperty) 




//get all properties based on bedrooms
router.get('/:ids/bed', (req, res) => {
    res.json({mssg: 'GET properties with beds'})
})

//Update a property
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE|property'})
})

module.exports = router

