import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Header-logo/logo.png'
import useFirebase from '../Hooks/useFirebase';
import './Header.css'

const Header = () => {
 const {user, logOut}= useFirebase()
    return (
        <div className="style-header">
           
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="#home"> <img className="logo-image" src={logo} alt="" /> </Navbar.Brand>
        <Container>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="">
            <Link to="/home"> Home</Link>
            <Link to="/service">Our Services</Link>
          <Link to="/doctors-list">Doctors List</Link>
        <Link to="/login">Login</Link> 
        <div>{user.displayName}</div>
        {
          user?.email && <Button onClick={logOut} >Log Out</Button>
        }
        
      </Nav>
    <Form className="d-flex ms-3">
<FormControl
  type="search"
    placeholder="Example: Doctors name"
      className="mr-2"
        aria-label="Search"
            />
              <Button className="btn btn-warning text-dark ms-2" variant="outline-danger">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default Header;


