import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavvBarr = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">Doctoral Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{color:"Black"}} href="home">Home</Nav.Link>
            <Nav.Link style={{color:"Black"}} href="about">About</Nav.Link>
            <Nav.Link style={{color:"gray"}} href="dentalService">Dental Service</Nav.Link>
            <Nav.Link style={{color:"white"}} href="reviews">Reviews</Nav.Link>
            <Nav.Link style={{color:"white"}} href="blog">Blog</Nav.Link>
            <Nav.Link style={{color:"white"}} href="contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
};

export default NavvBarr;
