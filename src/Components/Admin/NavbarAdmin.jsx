// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarAdmin = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Navbar.Brand href="#home">Cafe Management</Navbar.Brand>
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
          <Nav.Link href="#">Register Admin</Nav.Link>
          <Nav.Link href="#">Add Category</Nav.Link>
          <Nav.Link href="#">All Orders</Nav.Link>
          <Nav.Link href="#">All Foods</Nav.Link>
          <Nav.Link href="#">All Categories</Nav.Link>
          <Nav.Link href="#">All Restaurants</Nav.Link>
          <Nav.Link href="#">All Deliveries</Nav.Link>
          <Nav.Link href="#">View Customers</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarAdmin;


