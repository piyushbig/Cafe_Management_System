// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./Styles/Navbar.css";
const NavbarAdmin = () => {
  return (
    <>
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

          
          <Nav.Link href="/registerAdmin">Register Admin</Nav.Link>
          <Nav.Link href="/addCategory">Add Category</Nav.Link>
          <Nav.Link href="/allCatrgories">All Categories</Nav.Link>
          <Nav.Link href="/allCafes">All Cafes</Nav.Link>
        </Nav>
        
        
      </Navbar.Collapse>
      <Nav className="logout d-flex">
          <Nav.Link href="#">Logout</Nav.Link>
      </Nav>
      
    </Navbar>


    </>
   

  );
};

export default NavbarAdmin;


