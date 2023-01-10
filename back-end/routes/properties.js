const express = require('express')
const Property = require('../models/propertyModel')
const router = express.Router()
const {createProperty, getProperties, deleteProperty, updateProperty, getProperty, getBed} = require('../controllers/propertyControls' )



//dummy start
router.get('/', (req, res) => {
    res.json({mssg: 'welcome to the app'})
})

//get a all properties
router.get('/all', getProperties)

//get a all properties
router.get('/beds/:qty', getBed)

//get a single property
router.get('/:id', getProperty)

//create a  property
router.post('/', createProperty) 

//Update a property
router.patch('/:id', updateProperty)

//delete a property
router.delete('/:id', deleteProperty)

module.exports = router

