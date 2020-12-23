import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../resource/logo.png';

const Navigation = () => {
    //TODO: the useLocation is not working
    //const rootPath = useLocation().pathname.split("/")[1];
    //console.log(rootPath);
    return (
        // bg="dark"
            <Navbar id="nav" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink className="navbar-brand" to="/">
                        <div class="header">
                            <img src={logo} alt="Logo" id="brand-logo"/>
                            <h1 id="brand-title">Doggo Match</h1>
                        </div>
                    </NavLink>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <NavLink className="d-inline p-2  link-path" to="/">HOME</NavLink>
                        <NavLink className="d-inline p-2  link-path" to="/commentOverview">CONNECT</NavLink>
                        <NavLink className="d-inline p-2  link-path" to="/Inspire">INSPIRE</NavLink>
                        <NavLink className="d-inline p-2  link-path" to="/AboutUs">ABOUT US</NavLink>
                        {/* {this.props.isSignedIn ? <NavLink className="d-inline p-2 bg-dark text-white" to="/" onClick={this.props.handleSignOut}>Sign Out</NavLink> :
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/login">LOG IN</NavLink>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;