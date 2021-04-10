import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import HeaderMain from "../HeaderMain/HeaderMain";

const NavvBarr = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Doctoral Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto " >
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="dentalService">Dental Service</Nav.Link>
            <Nav.Link href="reviews">Reviews</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="contactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default NavvBarr;
