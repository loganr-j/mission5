const Property = require('../models/propertyModel')
const mongoose = require('mongoose')

// get all properties
const getProperties = async(req, res) => {

    try { 
        const properties = await Property.find({}).sort({createdAt: -1})
        res.status(200).json(properties)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}

// get all properties based on bed numbers
const getBed = async(req, res) => {
    
    const { qty } = req.params

    try { 
        const properties = await Property.find({bed: qty}).sort({createdAt: -1})
        res.status(200).json(properties)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}



// get single property
const getProperty = async(req, res) => {
    const { id } = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no property by that id'})
    }
    const property = await Property.findById(id)

    if(!property) {
        return res.status(404).json({error: 'no property by that id'})
    } 

    res.status(200).json(property)
}

//create new property
const createProperty = async(req, res) => {
    const {address, picture, rent, bed, bath, heat, carparks, streetparks, pets} = req.body

    //add doc to db
    try {
        const property = await Property.create({address, picture, rent, bed, bath, heat, carparks, streetparks, pets})
        res.status(200).json(property)
    }   catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a property
const deleteProperty = async(req, res) => {
    const { id } = req.params
   
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no property by that id'})
    }

    const property = await Property.findByIdAndDelete({_id : id})

    if(!property) {
        return res.status(404).json({error: 'no property by that id'})
    } 
    res.status(200).json(property)
} 

//update a property
const updateProperty = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no property by that id'})
    }

    const property = await Property.findByIdAndUpdate({_id : id}, {
        ...req.body
    })

    if(!property) {
        return res.status(404).json({error: 'no property by that id'})
    } 
    res.status(200).json(property)
}


module.exports = {
    createProperty,
    getProperties,
    deleteProperty,
    updateProperty,
    getProperty,
    getBed

}