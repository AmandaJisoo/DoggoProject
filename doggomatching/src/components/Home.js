import React from "react";
import { Link } from "react-router-dom";
import homePic from '../resource/homePic.jpg';

import { Button} from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <header className="container" id="pic">
                <div>
                    <h1 id="landing-title">Find Freinds and Partners for Your Puppy</h1>
                    <Button variant="primary" id="landing-page-btn">CREATE ACCOUNT</Button>{''}
                </div>
            <div id="wrapper">  
            <div id="yourdiv">Read more about Doggo Match <span role="img" aria-label="down arrow">↓</span></div>
            </div>
            </header>
            <div className="main">
                <h3 style={{ "textAlign": "center" }}>Some Sample Content</h3>
                <p>
                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                </p>
                <p>
                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                </p>
                <p>
                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                </p>
                <p>
                    Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                </p>
            </div>
        </div>
    )
}

export default Home;