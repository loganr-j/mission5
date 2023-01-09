const Property = require('../models/propertyModel')

// get all properties based on number of beds
const getProperties = async(req, res) => {

    const { bed } = req.params
    console.log(req.params[bed])
    console.log(req.params['beds']);

    try { 
        const properties = await Property.filter({ beds: bed }).sort({createdAt: -1})
        res.status(200).json(properties)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
}



// get single property
const getProperty = async(req, res) => {
    
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

//update a property


module.exports = {
    createProperty,
    getProperties 
}