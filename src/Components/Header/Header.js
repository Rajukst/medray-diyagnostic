import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/Header-logo/logo.png'
import useAuth from '../Hooks/useAuth';
import './Header.css'

const Header = () => {
 const {user, logOut}= useAuth();
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
          <Link to="/about-us">About Us</Link>
        <Link to="/login">Login</Link> 
      </Nav>
          </Navbar.Collapse>
            </Container>
            <div className="me-2">Logged As: {user.displayName}
            </div>
            <div className="imgage-div me-1">
            <img src={user.photoURL} alt="" />
            </div>
            {
          user?.email && <Button className="btn btn-warning me-1 ms-2" onClick={logOut} >Log Out</Button>
        }
           
            
          </Navbar>
        </div>
    );
};

export default Header;


