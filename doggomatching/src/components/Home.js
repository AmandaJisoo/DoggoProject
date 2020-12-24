import React from "react";
import { Link } from "react-router-dom";
import homePic from '../resource/homePic.jpg';

const Home = () => {
    return (
        <div>
            {/* <div className="container"> */}
                <header className="container" id="pic">
                    <h1>Welcome to my LandingPage</h1>
                    <p>How are you doing?</p>
                    <span id="down">&#8595;</span>
                    <button className="btn">Button</button>
                </header>
    
            {/* </div> */}
            <div className="main">
                <h3 style={{ "text-align": "center" }}>Some Sample Content</h3>
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