import React, { useState, useEffect } from "react";
import { Col, Button, Form, Modal } from "react-bootstrap";
import SignUpErrors from './SignUpErros';

import { Multiselect } from "multiselect-react-dropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SignUpContainer = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [nameOfPet, setPetName] = useState("");
    const [sizeOfPet, setPetSize] = useState("");
    const [sexOfPet, setSexPet] = useState("");
    const [ageOfPet, setPetAge] = useState("");
    const [personalityOfPet, setPetPersonality] = useState("");
    const [sizePreferece, setPetFriendSize] = useState("");
    const [areaOfInterest, setAreaOfInterest] = useState("");
    const [fbName, setFbName] = useState("");
    const [instagramName, setInstagramName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [error, setError] = useState(false);
 

    const  personalityOptions =  [
        { key: "Frendly" },
        { key: "Shy"  },
        { key: "Ambitious" },
        { key: "Impulsive" },
        { key: "Confident" },
        { key: "Independent" },
        { key: "Laidback" }
    ]

    const sizePreferenceOptions = [
        { key: "Small" },
        { key: "Medium"  },
        { key: "Large" }
    ]

    const areaOfInterestOptions = [
        { key: "Making Friends" },
        { key: "Breeding"  },
    ]

    var personalityLi = [];
    var sizePrefereceLi = [];
    var interestLi = [];

    const handleAddPersonality = (e) => {
        e.forEach((evt) => {
            personalityLi.push(evt.key);
        })
        setPetPersonality(personalityLi);
    }

    const handleSizePreferences = (e) => {
        e.forEach((evt) => {
            sizePrefereceLi.push(evt.key);
        })
        setPetFriendSize(sizePrefereceLi);
    }

    const handleIntersts = (e) => {
        e.forEach((evt) => {
            interestLi.push(evt.key);
        })
        setAreaOfInterest(interestLi);
    }

    const handleEmptyMutipleSelectField = () => {
        console.log('personalityOfPet[0]', personalityOfPet[0])
        if (personalityOfPet[0] !== undefined && sizePreferece[0] !== undefined && areaOfInterest[0] !== undefined) {
            console.log('personalityOfPet', personalityOfPet)
            console.log('sizePreferece', sizePreferece)
            console.log('areaOfInterest', areaOfInterest)
            return true;
        } 
        console.log('whatt')
        return false;
    }

    const handlePopup = () => {
        console.log("nani")
        setError(false);
    }

    const onSubmit = evt => {
        evt.preventDefault();

        //any of the fieds are empty
  

        const registered = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            username: username, 
            password: password, 
            zip: zipcode,
            nameOfPet: nameOfPet,
            sizeOfPet: sizeOfPet,
            sexOfPet: sexOfPet,
            ageOfPet: ageOfPet,
            personalityOfPet: personalityOfPet,
            sizePrefereceToBeFrined: sizePreferece,
            areaOfInterest: areaOfInterest,
            fbName: fbName,
            instagramName: instagramName,
            city: city,
            state: state,
        }

        //maually validate mutiple select field
        if (handleEmptyMutipleSelectField()) {
            axios.post('http://localhost:4000/app/signup', registered)
            .then(response => console.log(response.data))
        }else {
            setError(true);
        }

    }

    return (
        <>
        <Form onSubmit={onSubmit} className="form-view">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName" className="text-box">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Firstname" onChange={e => setFirstname(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Password" onChange={e => setLastName(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>Facebook Username (Will be shared with matched user) </Form.Label>
                    <Form.Control type="text" placeholder="Enter Firstname" onChange={e => setFirstname(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Instagram Username (Will be shared with matched user) </Form.Label>
                    <Form.Control type="text" placeholder="Enter Password" onChange={e => setLastName(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control required placeholder="Enter City" onChange={e => setCity(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" onChange={e => setState(e.target.value)}>
                    <Form.Label>State</Form.Label>
                    <Form.Control required as="select" defaultValue="Choose...">
                        <option value="">N/A</option>
                        <option value="AK">Alaska</option>
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="AZ">Arizona</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DC">District of Columbia</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="IA">Iowa</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MD">Maryland</option>
                        <option value="ME">Maine</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MO">Missouri</option>
                        <option value="MS">Mississippi</option>
                        <option value="MT">Montana</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="NE">Nebraska</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NV">Nevada</option>
                        <option value="NY">New York</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VA">Virginia</option>
                        <option value="VT">Vermont</option>
                        <option value="WA">Washington</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WV">West Virginia</option>
                        <option value="WY">Wyoming</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip" onChange={e => setZipcode(e.target.value)}>
                    <Form.Label>Zipcode</Form.Label>
                <Form.Control required placeholder="Enter Zipcode"/>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridNameOfPet">
                    <Form.Label>Name of Pet</Form.Label>
                    <Form.Control required type="text" placeholder="Enter Name of Pet" onChange={e => setPetName(e.target.value)} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNameOfPet">
                    <Form.Label>Size of Pet</Form.Label>
                    <Form.Control required as="select" defaultValue="Choose..." onChange={(e)=> setPetSize(e.target.value)} >
                        <option value="">Select Size</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridNameOfPet">
                <Form.Label>Sex of Pet</Form.Label>
                <Form.Control required as="select" defaultValue="Choose..." onChange={(e) => setSexPet(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNameOfPet">
                <Form.Label>Age of Pet</Form.Label>
                <Form.Control required type="text" placeholder="Enter Size of Pet" onChange={e => setPetAge(e.target.value)} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridNameOfPet">
                <Form.Label>Personality of Pet</Form.Label>
                <Multiselect
                    options={personalityOptions}
                    displayValue="key"
                    showCheckbox={true}
                    onSelect={ handleAddPersonality }
                    onRemove={ handleAddPersonality }
                    closeIcon="close"
                />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridFriendPreference" required>
                    <Form.Label>Pet Friend Preference Size</Form.Label>
                    <Multiselect
                        options={sizePreferenceOptions}
                        displayValue="key"
                        showCheckbox={true}
                        onSelect={ handleSizePreferences }
                        onRemove={ handleSizePreferences }
                        closeIcon="close"
                    />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridNameOfPet">
                    <Form.Label>Area of Interest</Form.Label>
                    <Multiselect
                        options={areaOfInterestOptions}
                        displayValue="key"
                        showCheckbox={true}
                        onSelect={ handleIntersts }
                        onRemove={ handleIntersts }
                        closeIcon="close"
                    />
                </Form.Group>
            </Form.Row>

            <input type='submit' className='btn btn-danger btn-block' 
            value='Submit'></input>
            {error? <SignUpErrors error={error} handlePopup={handlePopup}></SignUpErrors> : console.log("wtf")}
        </Form>
        </>
    )
}

export default SignUpContainer;