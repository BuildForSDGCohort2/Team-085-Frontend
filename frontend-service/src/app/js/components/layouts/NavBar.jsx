import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    return (      
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand href="#">Handiwork</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="link-border font-bold" href="#">Become an artisan</Nav.Link>
                        <Nav.Link className="link-border font-bold ml-3" href="#">Request an artisan</Nav.Link>
                        <Nav.Link className="font-bold text-blue" style={{color:'#155eb5'}} href="#">LOG IN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
  };
  
  export default NavBar;

