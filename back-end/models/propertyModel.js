const mongoose = require('mongoose')

const Schema = mongoose.Schema

const propertySchema = new Schema({
    address: {
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    bath: {
        type: Number,
        required: true
    },
    bed: {
        type: Number,
        required: true
    },
    heat: {
        type: Number,
        required: false
    },
    carparks: {
        type: Number,
        required: false
    },
    streetparks: {
        type: Number,
        required: false
    },
    pets: {
        type: Boolean,
        required: false
    }
}, { timestamps: true})

module.exports = mongoose.model('Property', propertySchema)

