const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    nameOfPet: {
        type: String,
        required: true
    },
    sizeOfPet: {
        type: String,
        required: true
    },
    sexOfPet: {
        type: String,
        required: true
    },
    ageOfPet: {
        type: Number,
        required: true
    },
    personalityOfPet:{
        type: [String],
        required: true
    },
    sizePrefereceToBeFrined:{
        type: [String],
        required: true
    },
    areaOfInterest: {
        type:[String],
        required: true
    },
    fbName: {
        type:String,
        required: false,
        default: "N/A"
    },
    instagramName: {
        type:String,
        required: false,
        default: "N/A",
    },
    // img: {
    //     data: Buffer,
    //     contentType: String
    // },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('tableForDogSign', signUpTemplate)