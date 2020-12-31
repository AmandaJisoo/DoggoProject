const express = require('express');
const router = express.Router();
const signUpTemplate = require('../models/SignUpModel');
//path, callnack function
router.post('/signup', (request, response) => {
    console.log(response);
    const signUpUser = new signUpTemplate({
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        username: request.body.username,
        password: request.body.password,
        zip: request.body.zip,
        nameOfPet: request.body.nameOfPet,
        sizeOfPet: request.body.sizeOfPet,
        sexOfPet: request.body.sexOfPet,
        ageOfPet: request.body.ageOfPet,
        personalityOfPet: request.body.personalityOfPet,
        sizePrefereceToBeFrined: request.body.sizePrefereceToBeFrined,
        areaOfInterest: request.body.areaOfInterest,
        fbName: request.body.fbName,
        instagramName: request.body.instagramName,
        city: request.body.city,
        state: request.body.state,    
        // img figure out later 
    })

    // it says all the data 
    signUpUser.save()
    .then(data => {
        console.log(response.json(data));
    })
    .catch(err => {
        response.json(err);
    })
});

module.exports = router;