import React, { Component } from "react";
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar bg="dark" variant="dark">
        <BootstrapNavbar.Brand as={Link} to="/home">E-commerce</BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>
      </BootstrapNavbar>
    )
  }
}