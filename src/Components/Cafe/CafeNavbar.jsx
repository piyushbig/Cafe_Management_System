// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './cafe.png';
// import './CafeNavbar.css';

const CafeNavbar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Cafe Management Logo" className="logo-img" />Cafeto</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#category1">Category 1</NavDropdown.Item>
            <NavDropdown.Item href="#category2">Category 2</NavDropdown.Item>
            <NavDropdown.Item href="#category3">Category 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Contact Us</Nav.Link>
          <Nav.Link href="#">Restaurant Orders</Nav.Link>
          <Nav.Link href="#">Register Delivery</Nav.Link>
          <Nav.Link href="#">View Delivery Persons</Nav.Link>
          <Nav.Link href="/addFood">Add Food</Nav.Link>
          <Nav.Link href="#">View My Foods</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CafeNavbar;


