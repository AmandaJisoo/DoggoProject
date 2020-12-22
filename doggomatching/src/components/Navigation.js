import React  from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

const Navigation = () => {
    return (
        <div>
            <Headroom>
                <div className="sticky nav-bg pt-3 pb-3">
                    <nav className="navbar navbar-expand-xl navbar-light p-0">
                        <Link className="navbar-brand" to="/">
                            <h3 className="mb-0">Doggo Match</h3>
                            <img
                                className="pl-2" alt="recycle symbol"
                                src="https://www.flaticon.com/svg/static/icons/svg/3696/3696954.svg"
                            />
                        </Link>
                        {/* <button
                            className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNav" aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <Link className="nav-link" to="/">HOME</Link>   
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </Headroom>
        </div>
    )
}

export default Navigation;