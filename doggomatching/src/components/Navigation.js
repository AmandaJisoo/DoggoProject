import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../resource/logo.png';

const Navigation = () => {
    return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                        <NavLink className="navbar-brand" to="/">
                            <div>
                                <h3 className="brand-name"> Doggo Match</h3>
                                <img src={logo} alt="Logo" />;
                            </div>
                        </NavLink>
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">HOME</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/commentOverview">CONNECT</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/Inspire">INSPIRE</NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/AboutUs">ABOUT US</NavLink>
                        {/* {this.props.isSignedIn ? <NavLink className="d-inline p-2 bg-dark text-white" to="/" onClick={this.props.handleSignOut}>Sign Out</NavLink> :
                            <NavLink className="d-inline p-2 bg-dark text-white" to="/login">LOG IN</NavLink>
                        } */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Navigation;