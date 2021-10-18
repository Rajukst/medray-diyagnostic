import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div className="style-header">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Janani </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
            <Link to="/home"> Home</Link>
            <Link to="/service">Our Services</Link>
          <Link to="/doctors-list">Doctors List</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/ambulance"> Ambulance Service</Link>
      </Nav>
    <Form className="d-flex ms-5">
<FormControl
  type="search"
    placeholder="Example: Doctors name"
      className="mr-2"
        aria-label="Search"
            />
              <Button className="btn btn-warning text-dark ms-2" variant="outline-danger">Search</Button>
                </Form>
                  <Button className="ms-5 btn btn-secondary">Log In</Button>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;


