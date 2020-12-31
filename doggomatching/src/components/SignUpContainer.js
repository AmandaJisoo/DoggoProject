import React, { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";

const SignUpContainer = () => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [password, setPassword] = useState("");
    const [nameOfPet, setPetName] = useState("");
    const [sizeOfPet, setSizePet] = useState("");
    const [sexOfPet, setSexPet] = useState("");
    const [ageOfPet, setPetAge] = useState("");
    const [personalityOfPet, setPetPersonality] = useState("");
    const [sizePreferece, setPetFriendSize] = useState("");
    const [areaOfInterest, setAreaOfInterest] = useState("");
    const [fBName, setFbName] = useState("");
    const [instagramName, setInstagramName] = useState("");
    // reference: https://mdbootstrap.com/docs/react/forms/multiselect/
    // const personalityOfList = [{value:'One',selected:true},{value:'Two'},{value:'Three'},{value:'Four',label:'Four Label'}]
    return (
        <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Enter Firstname" onChange={e => setFirstname(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Enter Password" onChange={e => setLastName(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="Enter City" onChange={e => setCity(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState" onChange={e => setState(e.target.value)}>
                <Form.Label>State</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
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
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control placeholder="Enter Zipcode"/>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridNameOfPet">
            <Form.Label>Name of Pet</Form.Label>
            <Form.Control type="text" placeholder="Enter Name of Pet" onChange={e => setPetName(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridNameOfPet">
            <Form.Label>Size of Pet</Form.Label>
            <Form.Control type="text" placeholder="Enter Size of Pet" onChange={e => setSizePet(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNameOfPet">
            <Form.Label>Sex of Pet</Form.Label>
            <Form.Control type="text" placeholder="Enter Size of Pet" onChange={e => setSexPet(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNameOfPet">
            <Form.Label>Age of Pet</Form.Label>
            <Form.Control type="text" placeholder="Enter Size of Pet" onChange={e => setPetAge(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridNameOfPet">
            <Form.Label>Personality of Pet</Form.Label>
            <Form.Control type="text" placeholder="Enter Size of Pet" onChange={e => setPetPersonality(e.target.value)} />
            </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
            Submit
            {console.log(state)}
        </Button>
        </Form>
    )
}

export default SignUpContainer;