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
                    {/* <p>How are you doing?</p> */}
                    <Button variant="primary" id="landing-page-btn">CREATE ACCOUNT</Button>{''}
                </div>
                <span id="down">&#8595;</span>
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